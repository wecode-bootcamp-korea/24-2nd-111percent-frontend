import React, { useState, useEffect } from 'react';
import InvestInput from './InvestInput';
import Amount from './Amount';
import styled from 'styled-components';
import axios from 'axios';
import fetchData from '../../../../service/data-fetch';

function Invest(props) {
  const { investment, paramID } = props;
  const return_percent = 1 + investment.return_rate / 100;
  const { target_amount, current_amount } = investment;
  const limit = target_amount - current_amount;

  const [amount, setAmount] = useState(500.5);
  const [clicked, setClick] = useState(false);
  const [scrollTop, setScroll] = useState(0);

  const TOKEN = 'token';
  const getTOKEN = token => {
    const userToken = localStorage.getItem(token);
    return userToken;
  };

  useEffect(() => {
    window.addEventListener('scroll', e => {
      setScroll(document.documentElement.scrollTop);
    });
  }, [scrollTop]);

  useEffect(() => {
    if (clicked === true) {
      setAmount(prevAmount => prevAmount + 0.5);
    } else {
      setAmount(prevAmount => prevAmount - 0.5);
    }
  }, [clicked]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new fetchData();
    const userTOKEN = getTOKEN(TOKEN);

    if (userTOKEN) {
      data.sendInvestRequest(userTOKEN, amount * 10000, paramID).then(res => {
        if ((res.MESSAGE = 'SUCCESS')) {
          alert('성공적으로 투자하였습니다!');
        } else {
          alert('예치금액을 초과하는 금액은 투자할 수 없습니다.');
        }
      });
    } else {
      alert('로그인 후 사용하실 수 있습니다.');
    }
  };

  const handleAmount = e => {
    const value = e.target.value;

    if (typeof value === 'string') {
      if (value.includes(',')) {
        setAmount(+value.replaceAll(',', ''));
      } else {
        setAmount(+value);
      }
    }
  };

  const investMax = () => {
    setAmount(500);
  };

  const handleClick = () => {
    setClick(!clicked);
  };

  return (
    <Wrapper>
      <Section
        className={scrollTop > 678 ? 'fixed' : ''}
        onSubmit={handleSubmit}
      >
        <H1>얼마를 투자할까요?</H1>
        <Buttons>
          <Button
            className={clicked ? 'clicked' : ''}
            onClick={handleClick}
            type="button"
          >
            +0.5
          </Button>
          <Button onClick={investMax} type="button">
            최대금액
          </Button>
        </Buttons>
        <InvestInput
          amount={amount}
          handleAmount={handleAmount}
          limit={limit}
        />
        {amount >= limit ? (
          <Warning>상품 모집 금액을 초과했습니다.</Warning>
        ) : (
          <Amount amount={amount} return_percent={return_percent} />
        )}
        <SquareButton
          type="submit"
          className={amount < 1 ? 'disabled' : ''}
          disabled={amount < 1 ? 'disabled' : ''}
        >
          투자하기
        </SquareButton>
      </Section>
    </Wrapper>
  );
}

export default Invest;

const Wrapper = styled.div`
  position: relative;
  flex: 3 3 25%;

  @media only screen and (max-width: 1079px) {
    display: none;
  } ;
`;

const Section = styled.form`
  width: 27rem;
  border: 1px solid #dee2e6;
  padding: 2.5rem 2rem 2rem;
  background-color: #fff;
  color: ${props => props.theme.black};

  &.fixed {
    position: fixed;
    top: 10rem;
  }
`;

const H1 = styled.h1`
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.06rem;
  margin-bottom: 1rem;
`;

const Warning = styled.div`
  margin-bottom: 4rem;
  color: ${props => props.theme.red};
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  text-align: end;
`;

const Buttons = styled.div`
  margin-bottom: 7rem;
`;

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  border-radius: 1rem;
  border: solid 1px #d2d2d2;
  padding: 0.5rem 1rem 0.4rem 0.9rem;
  margin-right: 0.5rem;
  transition: all 0.3s;

  &.clicked {
    background-color: #f1f3f5;
    border-color: #f1f3f5;

    &:hover {
      background-color: #f1f3f5;
      border-color: #f1f3f5;
    }
  }

  &:hover {
    background-color: #f8f9fa;
    border-color: #d2d2d2;
    cursor: pointer;
  }
`;

const DepositBtn = styled(Button)`
  background-color: #f8f9fa;
`;

const SquareButton = styled.button`
  display: block;
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.purple};
  border-radius: 0.3rem;
  color: #fff;
  transition: all 0.3s;

  &.disabled {
    background-color: #c6b2df;
    border-color: transparent;

    &:hover {
      background-color: #c6b2df;
      cursor: auto;
    }
  }

  &:hover {
    background-color: #5929aa;
    cursor: pointer;
  }
`;
