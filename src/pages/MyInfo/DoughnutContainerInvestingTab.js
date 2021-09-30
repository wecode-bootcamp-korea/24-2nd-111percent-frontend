import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

function DoughnutContainerInvestingTab({ investingTab }) {
  return (
    <Container>
      <DoughnutBox>
        <Doughnut
          data={{
            datasets: [
              {
                data: [
                  investingTab?.[0].price === 0 ? 1 : investingTab[0].price,
                  investingTab?.[1].price,
                  investingTab?.[2].price,
                ],
                backgroundColor: ['#2880E4', '#60C03E', '#EEC306', '#DD864E'],
                cutout: '70%',
              },
            ],
          }}
          options={{ elements: { arc: { borderWidth: 0 } } }}
        />
        <ChartText>
          투자중 원금
          <div>
            {(
              investingTab?.[0].price +
              investingTab?.[1].price +
              investingTab?.[2].price
            ).toLocaleString('en')}
            원
          </div>
        </ChartText>
      </DoughnutBox>
      <DoughnutList>
        <List>
          <div>
            <InvestingColorBall></InvestingColorBall>
            <InvestmentStatusText>정상</InvestmentStatusText>
          </div>
          <Amount>
            {Number(investingTab?.[0].price).toLocaleString('en')}원
          </Amount>
        </List>
        <List>
          <div>
            <InvestmentCompletedColorBall></InvestmentCompletedColorBall>
            <InvestmentStatusText>상환지연</InvestmentStatusText>
          </div>
          <Amount>
            {Number(investingTab?.[1].price).toLocaleString('en')}원
          </Amount>
        </List>
        <List>
          <div>
            <LossColorBall></LossColorBall>
            <InvestmentStatusText>연체</InvestmentStatusText>
          </div>
          <Amount>
            {Number(investingTab?.[2].price).toLocaleString('en')}원
          </Amount>
        </List>
      </DoughnutList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DoughnutBox = styled.div`
  width: 18rem;
  height: 18rem;
  position: relative;
  margin-bottom: 2rem;
  margin-left: 3.5rem;
`;

const ChartText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #8a8a8a;

  div {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: black;
  }
`;

const DoughnutList = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  width: 26.5rem;
  height: 14rem;
  margin: auto 0;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 0;
`;

const InvestingColorBall = styled.span`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #2880e4;
  display: inline-block;
`;

const InvestmentStatusText = styled.span`
  font-size: 1.4rem;
`;

const InvestmentCompletedColorBall = styled(InvestingColorBall)`
  background-color: #60c03e;
`;

const LossColorBall = styled(InvestingColorBall)`
  background-color: #eec306;
`;

const Amount = styled.div`
  font-size: 1.4rem;
`;

export default React.memo(DoughnutContainerInvestingTab);
