import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import fetchData from '../../service/data-fetch';
import useForm from '../../utils/useForm';
import validate from '../../utils/Validate';
import axios from 'axios';
import styled from 'styled-components';

const Login = () => {
  const data = new fetchData();
  const history = useHistory();

  // keys
  const TOKEN = 'token';
  const KAKAO_TOKEN = 'kakao_token';
  const setTOKEN = token => {
    localStorage.setItem(TOKEN, token);
  };
  const setKakaoTOKEN = token => {
    localStorage.setItem(KAKAO_TOKEN, token);
  };

  // form validation
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
      name: 'null',
      phone_number: 'null',
      bank_name: 'null',
      account_number: 'null-null',
    },
    onSubmit: values => {
      data.logIn(values.email, values.password).then(response => {
        if (response.token) {
          setTOKEN(response.token);
          history.push('/');
        }
      });
    },
    validate,
  });

  //KAKAO
  const handleKakaoLogin = e => {
    const { Kakao } = window;

    Kakao.Auth.login({
      success: response => {
        data
          .kakaoLogin(response) //
          .then(res => {
            setKakaoTOKEN(res.access_token);
            if (res.access_token) {
              history.push('/');
            } else {
              alert('회원가입 페이지로 이동합니다.');
              history.push({
                pathname: '/signUp',
                state: {
                  res,
                },
              });
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <Wrapper>
      <Helmet>
        <title>로그인 | 111퍼센트</title>
      </Helmet>
      <Section onSubmit={handleSubmit}>
        <H1>로그인</H1>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <InputSet>
              <input
                name="email"
                type="email"
                placeholder="이메일 주소"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <Warning>{errors.email}</Warning>}
            </InputSet>
            <InputSet>
              <input
                name="password"
                type="password"
                placeholder="비밀번호"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <Warning>{errors.password}</Warning>}
            </InputSet>
          </InputWrapper>
          <Button disabled={submitting}>로그인</Button>
          <YellowBtn type="button" onClick={handleKakaoLogin}>
            카카오 계정으로 로그인
          </YellowBtn>
        </Form>
      </Section>
      <Signin onClick={() => history.push('/signUp')}>회원가입하기</Signin>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f4f4f4;
  padding-top: 4rem;
`;

const Section = styled.section`
  width: 50rem;
  margin: 7rem auto 0 auto;
  padding: 5rem;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 #d2d2d2;
`;

const H1 = styled.h1`
  margin-bottom: 4rem;
  color: #3c3c3c;
  font-size: 3.2rem;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 5rem;
    padding: 0 1.5rem;
    border: 1px solid rgb(219, 219, 219);
    color: rgb(73, 73, 73);
    font-size: 1.4rem;

    &::placeholder {
      color: rgb(219, 219, 219);
    }
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 6rem;
  text-align: center;
`;

const InputSet = styled.div`
  width: 30rem;
  margin: 0 auto 1rem auto;
`;

const Warning = styled.div`
  margin-top: 0.8rem;
  color: #e85757;
  font-size: 1.2rem;
  line-height: 1rem;
  letter-spacing: -0.03rem;
  text-align: start;
`;

const Button = styled.button`
  width: 30rem;
  height: 5rem;
  background-color: #6741d9;
  border-radius: 0.3rem;
  margin: 0 auto 1rem auto;
  color: #fff;
  font-size: ${props => props.theme.smallFont};

  &:hover {
    background-color: #5d41b4;
    cursor: pointer;
  }
`;

const YellowBtn = styled(Button)`
  background-color: #ffdd59;
  color: ${props => props.theme.black};

  &:hover {
    background-color: #ffd32a;
  }
`;

const Signin = styled.div`
  margin-top: 1.6rem;
  font-size: ${props => props.theme.smallFont};
  line-height: 2.1rem;
  text-align: center;
  color: rgb(146, 146, 146);
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
