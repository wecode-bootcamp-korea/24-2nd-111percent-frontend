import React, { useState } from 'react';
import styled from 'styled-components';
import fetchData from '../../service/data-fetch';
import axios from 'axios';

function Aside({ investingTab, accountNumber, depositPlus, setDepositPlus }) {
  const [depositValue, setDepositValue] = useState('');
  const data = new fetchData();

  const postDeposit = () => {
    data
      .sendDeposit(depositValue, localStorage.getItem('token'))
      .then(response => {
        if (response.message === 'SUCCESS') {
          setDepositPlus(response.deposit_balance);
          setDepositValue('');
        }
      });
  };

  const handleInput = e => {
    setDepositValue(e.target.value);
  };

  return (
    <AsideBox>
      <Box>
        <Deposit>예치금</Deposit>
        <AccountNumber>{accountNumber}</AccountNumber>
        <DepositInput type="text">
          <input
            className="input"
            placeholder="0원"
            value={depositValue}
            onChange={handleInput}
          />
          <span onClick={postDeposit}>입금하기</span>
        </DepositInput>
        <MyMoney>{depositPlus?.toLocaleString('en')}원</MyMoney>
      </Box>
      <Section>
        <TodayContainer>
          <div>
            <TodayRecommend>오늘의 추천 상품</TodayRecommend>
            <ExpectedRateOfReturn>예상수익률 8.1%</ExpectedRateOfReturn>
            <ExpectedRateOfReturn>LTV 비율 65.83%</ExpectedRateOfReturn>
          </div>
          <Photo>
            <img
              alt="buildingPhoto"
              className="Photo"
              src="https://img.seoul.co.kr/img/upload/2020/10/07/SSI_20201007100007_O2.jpg"
            ></img>
          </Photo>
        </TodayContainer>
        <Address>주거안정 405호 남양주 화도읍 신창현풍림아이원</Address>
      </Section>
      <Section>
        <InvestmentLimit>투자한도</InvestmentLimit>
        <InvestmentLimit amount>3,000만원</InvestmentLimit>
        <ProcessBar>
          <div
            className="ProcessValue"
            style={{
              width: '100%',
              backgroundColor: '#FFCB64',
            }}
          ></div>
          <div
            className="ProcessValue"
            style={{
              width: '33%',
              backgroundColor: '#FFA525',
            }}
          ></div>
        </ProcessBar>
        <RemainingLimit>
          총 잔여한도&nbsp;
          {(30000000 - investingTab?.[0].price).toLocaleString('en')}원
        </RemainingLimit>
        <RemainingLimit>
          부동산 잔여한도&nbsp;
          {(10000000 - investingTab?.[0].price).toLocaleString('en')}원
        </RemainingLimit>
      </Section>
      <Section>
        <a href="https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_yxcDExd%2Ffriend">
          <h4>우리 카톡 플친해요!</h4>
          <p>
            8퍼센트 채널 추가하고
            <br /> 새로운 상품 알림을 받아보세요
          </p>
        </a>
      </Section>
    </AsideBox>
  );
}
const AsideBox = styled.aside`
  margin-right: 1.5rem;
`;

const Box = styled.div`
  width: 29rem;
  height: 21rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
  background-image: radial-gradient(
      circle at 44% 13%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 98%,
      transparent 98%,
      transparent 100%
    ),
    radial-gradient(
      circle at 87% 84%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 46%,
      transparent 46%,
      transparent 100%
    ),
    radial-gradient(
      circle at 84% 60%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 40%,
      transparent 40%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 32%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 28%,
      transparent 28%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 12%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 34%,
      transparent 34%,
      transparent 100%
    ),
    radial-gradient(
      circle at 33% 60%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 29%,
      transparent 29%,
      transparent 100%
    ),
    radial-gradient(
      circle at 3% 11%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 0% 74%,
      hsla(237, 0%, 100%, 0.05) 0%,
      hsla(237, 0%, 100%, 0.05) 87%,
      transparent 87%,
      transparent 100%
    ),
    linear-gradient(45deg, rgb(99, 105, 190), rgb(99, 70, 205));
  border-radius: 0.5rem;
`;

const Section = styled.div`
  width: 29rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem 0 #d2d2d2;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: #dcdcdc;
    }
  }
`;

const TodayContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DepositInput = styled.div`
  margin-bottom: 1rem;
  color: white;
  font-size: 1.6rem;

  input {
    height: 3.5rem;
    width: 14.5rem;
    margin-right: 1rem;
    padding-right: 1rem;
    text-align: right;

    &:focus {
      outline: none;
    }
  }

  span {
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Deposit = styled.div`
  margin-bottom: 1rem;
  color: white;
  font-size: 1.6rem;
`;

const AccountNumber = styled.div`
  margin-bottom: 6.6rem;
  color: #c7baf8;
  font-size: 1.2rem;
  text-decoration: underline;
`;

const MyMoney = styled.div`
  color: white;
  font-size: 2.4rem;
`;

const TodayRecommend = styled.div`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

const ExpectedRateOfReturn = styled.div`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const Address = styled.div`
  margin-top: 4rem;
  font-size: 1.2rem;
  color: #889196;
`;

const Photo = styled.div`
  .Photo {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0.4rem;
  }
`;

const InvestmentLimit = styled.div`
  margin-bottom: ${props => (props.amount ? '3rem' : '1.5rem')};
  font-size: ${props => (props.amount ? '2.4rem' : '1.6rem')};
`;

const ProcessBar = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 0.3rem;
  background-color: #f4f4f4;

  .ProcessValue {
    position: absolute;
    right: 0;
    height: 0.4rem;
    border-radius: 0.2rem;
  }
`;

const RemainingLimit = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  color: #889196;
`;

export default Aside;
