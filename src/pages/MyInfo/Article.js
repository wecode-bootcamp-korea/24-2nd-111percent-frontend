import React, { useState } from 'react';
import styled from 'styled-components';
import DoughnutContainerAllTab from './DoughnutContainerAllTab';
import DoughnutContainerInvestingTab from './DoughnutContainerInvestingTab';
import PortfolioContainerRankTab from './PortfolioContainerRankTab';
import PortfolioContainerYieldTab from './PortfolioContainerYieldTab';

function Article({
  deposit,
  investing,
  investmentCompleted,
  loss,
  investingTab,
  yieldTab,
  rankTab,
  rateOfReturn,
  cumulativeProfit,
  depositPlus,
}) {
  const [isSubTextOn, setToggleSubText] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const [portfolioTabIndex, setPortfolioTabIndex] = useState(1);

  const MAPPING_Doughnut = {
    1: (
      <DoughnutContainerAllTab
        investing={investing}
        investmentCompleted={investmentCompleted}
        loss={loss}
        investingTab={investingTab}
      />
    ),
    2: <DoughnutContainerInvestingTab investingTab={investingTab} />,
  };

  const MAPPING_Portfolio = {
    1: <PortfolioContainerRankTab rankTab={rankTab} />,
    2: (
      <PortfolioContainerYieldTab
        investingTab={investingTab}
        yieldTab={yieldTab}
      />
    ),
  };

  return (
    <article>
      <Section>
        <YieldBox>
          <YieldTitle>
            수익률
            <div className={isSubTextOn ? 'subTextOn' : 'subTextOff'}>
              미래의 기대 수익과 현재까지 지급받은 원리금을 바탕으로 연체 및
              부실로 인한 손실 예상금액을 반영한 세전 수익률입니다. (IRR 방식)
            </div>
            <i
              className="far fa-question-circle"
              onClick={() => setToggleSubText(!isSubTextOn)}
            ></i>
          </YieldTitle>
          <Yield>{rateOfReturn}%</Yield>
        </YieldBox>
        <AssetBox>
          <BoxTitle>
            자산 <SubText>예치금+투자 중 원금</SubText>
          </BoxTitle>
          <AssetBox asset>
            {Number(depositPlus + investingTab?.[0].price).toLocaleString('en')}
            원
          </AssetBox>
        </AssetBox>
        <CumulativeRevenueBox>
          <BoxTitle>
            누적 수익 <SubText>세전</SubText>
          </BoxTitle>
          <CumulativeRevenueBox cumulativeRevenue>
            {cumulativeProfit?.toLocaleString('en')}원
          </CumulativeRevenueBox>
        </CumulativeRevenueBox>
      </Section>
      <InvestmentStatusBox>
        <InvestmentStatusTitle>
          투자 현황
          <Tab>
            <AllTab
              isTab={tabIndex}
              onClick={() => {
                setTabIndex(1);
              }}
            >
              전체
            </AllTab>
            <InvestingTab
              isTab={tabIndex}
              onClick={() => {
                setTabIndex(2);
              }}
            >
              투자중
            </InvestingTab>
          </Tab>
        </InvestmentStatusTitle>
        {MAPPING_Doughnut[tabIndex]}
      </InvestmentStatusBox>
      <Portfolio>
        <BoxTitle>
          포트폴리오 현황
          <PortfolioTab>
            <RankTab
              isPortfolioTab={portfolioTabIndex}
              onClick={() => {
                setPortfolioTabIndex(1);
              }}
            >
              등급
            </RankTab>
            <YieldTab
              isPortfolioTab={portfolioTabIndex}
              onClick={() => {
                setPortfolioTabIndex(2);
              }}
            >
              수익률
            </YieldTab>
          </PortfolioTab>
        </BoxTitle>
        <Revenue>
          {(investing + investmentCompleted + loss).toLocaleString('en')}원
        </Revenue>
        {MAPPING_Portfolio[portfolioTabIndex]}
      </Portfolio>
    </article>
  );
}

const InvestmentStatusBox = styled.div`
  width: 59.5rem;
  padding: 1.5rem 1.8rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0.1rem 0.3rem 0 #d2d2d2;
  background-color: white;
`;

const Section = styled(InvestmentStatusBox)`
  display: flex;
  justify-content: space-between;
`;

const InvestmentStatusTitle = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  color: #626262;
`;

const Portfolio = styled.div`
  width: 59.5rem;
  padding: 1.5rem 1.8rem;
  box-shadow: 0 0.1rem 0.3rem 0 #d2d2d2;
  background-color: white;
`;

const BoxTitle = styled.div`
  position: relative;
  display: flex;
  width: 15rem;
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  color: #626262;
`;

const YieldTitle = styled.div`
  display: flex;
  width: 15rem;
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  color: #626262;

  .subTextOn {
    position: absolute;
    bottom: 56rem;
    right: 67rem;
    width: 27rem;
    height: 8rem;
    padding: 1.5rem;
    z-index: 4;
    font-size: 1.2rem;
    border: 0.1rem gray solid;
    background-color: white;
    line-height: 1.6rem;
  }

  .subTextOff {
    display: none;
  }

  i {
    margin-left: 0.5rem;
    font-size: 1.6rem;
    color: #9ca5ad;

    &:hover {
      cursor: pointer;
      color: #e3e3e5;
    }
  }
`;

const YieldBox = styled.div`
  width: 6.3rem;
`;

const Yield = styled.div`
  font-size: 3.2rem;
`;

const SubText = styled.div`
  margin-left: 0.3rem;
  color: #9ca5ad;
  font-size: 1.2rem;
`;

const AssetBox = styled.div`
  width: ${props => (props.asset ? '15rem' : '16rem')};
  font-size: ${props => (props.asset ? '1.8rem' : '1.6rem')};
`;

const CumulativeRevenueBox = styled.div`
  width: ${props => (props.cumulativeRevenue ? '7.4rem' : '13rem')};
  font-size: ${props => (props.cumulativeRevenue ? '1.8rem' : '1.6rem')};
`;

const Tab = styled.div`
  position: absolute;
  right: 0;
  width: 12.3rem;
  border: 0.1rem black solid;
  border-radius: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const AllTab = styled.span`
  display: inline-block;
  width: 6rem;
  height: 3rem;
  padding-top: 1rem;
  font-size: 1.2rem;
  font-weight: ${props => props.isTab === 1 && 'bold'};
  text-align: center;
  background-color: ${props => (props.isTab === 1 ? '#f4f4f4' : 'white')};
`;

const InvestingTab = styled.span`
  display: inline-block;
  width: 6rem;
  height: 3rem;
  padding-top: 1rem;
  font-size: 1.2rem;
  font-weight: ${props => props.isTab === 2 && 'bold'};
  text-align: center;
  background-color: ${props => (props.isTab === 2 ? '#f4f4f4' : 'white')};
`;

const Revenue = styled.div`
  margin-bottom: 5rem;
  font-size: 2.4rem;
`;

const PortfolioTab = styled.div`
  border: 1px black solid;
  border-radius: 2px;
  width: 12.3rem;
  position: absolute;
  left: 43.7rem;
  top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const RankTab = styled.span`
  width: 60px;
  height: 30px;
  display: inline-block;
  font-size: 12px;
  font-weight: ${props => props.isPortfolioTab === 1 && 'bold'};
  text-align: center;
  padding-top: 10px;
  background-color: ${props =>
    props.isPortfolioTab === 1 ? '#f4f4f4' : 'white'};
`;

const YieldTab = styled.span`
  width: 60px;
  height: 30px;
  display: inline-block;
  font-size: 12px;
  font-weight: ${props => props.isPortfolioTab === 2 && 'bold'};
  text-align: center;
  padding-top: 10px;
  background-color: ${props =>
    props.isPortfolioTab === 2 ? '#f4f4f4' : 'white'};
`;

export default Article;
