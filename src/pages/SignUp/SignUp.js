import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useLocation } from 'react-router';
import useForm from '../../utils/useForm';
import validate from '../../utils/Validate';
import styled from 'styled-components';
import axios from 'axios';
import fetchData from '../../service/data-fetch';

function SignUp() {
  const history = useHistory();
  const location = useLocation();

  //  카카오 로그인 시 기본적으로 받아오는 요소들
  const kakaoMail = location.state.res.user_email ?? null;
  const kakaoName = location.state.res.user_name ?? null;

  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: kakaoMail,
      password: '',
      name: kakaoName,
      phone_number: '',
      bank_name: '',
      account_number: '',
    },
    onSubmit: values => {
      const data = new fetchData();
      data.signUp(values).then(res => {
        if ((res.message = 'SUCCESS')) {
          alert('회원가입에 성공하였습니다. 로그인 페이지로 이동합니다');
          history.push('/login');
        } else {
          alert('회원 가입에 실패하였습니다. 정확히 다시 입력해주세요.');
        }
      });
    },
    validate,
  });

  return (
    <Wrapper>
      <Helmet>
        <title>회원가입 | 111퍼센트</title>
      </Helmet>
      <Section>
        <H1>회원가입</H1>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <InputSet>
              <input
                type="text"
                name="name"
                placeholder="성함"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name && <Warning>{errors.name}</Warning>}
            </InputSet>
            <InputSet>
              <input
                name="email"
                type="email"
                placeholder="이메일 주소"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && <Warning>{errors.email}</Warning>}
            </InputSet>
            <InputSet>
              <input
                name="password"
                type="password"
                placeholder="비밀번호 (문자, 숫자, 특수문자 포함 8자리 이상)"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && <Warning>{errors.password}</Warning>}
            </InputSet>
            <InputSet>
              <input
                type="text"
                name="phone_number"
                placeholder={`전화번호 ("-"없이 임력해주세요 ex) 01012345678)`}
                value={values.phone_number}
                onChange={handleChange}
              />
              {errors.phone_number && <Warning>{errors.phone_number}</Warning>}
            </InputSet>
            <InputSet>
              <input
                name="bank_name"
                type="text"
                placeholder={`출금은행명 ex)국민은행, 신한은행`}
                value={values.bank_name}
                onChange={handleChange}
              />
              {errors.bank_name && <Warning>{errors.bank_name}</Warning>}
            </InputSet>
            <InputSet>
              <input
                name="account_number"
                type="text"
                placeholder={`계좌번호 ("-"포함하여 입력해주세요)`}
                value={values.account_number}
                onChange={handleChange}
              />
              {errors.account_number && (
                <Warning>{errors.account_number}</Warning>
              )}
            </InputSet>
          </InputWrapper>
          <Button type="submit" disabled={submitting}>
            회원가입 하기
          </Button>
        </Form>
      </Section>
      <Login onClick={() => history.push('/login')}>로그인하기</Login>
    </Wrapper>
  );
}

export default SignUp;

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

const Login = styled.div`
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
