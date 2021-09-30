import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

function DoughnutContainerAllTab({
  investing,
  investmentCompleted,
  loss,
  investingTab,
}) {
  return (
    <Container>
      <DoughnutBox>
        <Doughnut
          data={{
            datasets: [
              {
                data: [
                  investing === 0 ? 1 : investing,
                  investmentCompleted,
                  loss,
                ],
                backgroundColor: [
                  'rgb(108, 57, 211)',
                  'rgb(222, 222, 244)',
                  '#D2D2D2',
                ],
                cutout: '70%',
              },
            ],
          }}
          options={{ elements: { arc: { borderWidth: 0 } } }}
        />
        <ChartText>
          누적 투자 원금
          <div>
            {(investing + investmentCompleted + loss).toLocaleString('en')}원
          </div>
        </ChartText>
      </DoughnutBox>
      <DoughnutList>
        <List>
          <div>
            <InvestingColorBall></InvestingColorBall>
            <InvestmentStatusText>투자중</InvestmentStatusText>
          </div>
          <Amount>{investing?.toLocaleString('en')}원</Amount>
        </List>
        <List>
          <div>
            <InvestmentCompletedColorBall></InvestmentCompletedColorBall>
            <InvestmentStatusText>투자완료</InvestmentStatusText>
          </div>
          <Amount>{investmentCompleted?.toLocaleString('en')}원</Amount>
        </List>
        <List>
          <div>
            <LossColorBall></LossColorBall>
            <InvestmentStatusText>손실</InvestmentStatusText>
          </div>
          <Amount>{loss?.toLocaleString('en')}원</Amount>
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

const InvestmentStatusText = styled.span`
  font-size: 1.4rem;
`;

const InvestingColorBall = styled.span`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: rgb(108, 57, 211);
  display: inline-block;
`;

const InvestmentCompletedColorBall = styled(InvestingColorBall)`
  background-color: rgb(222, 222, 244);
`;

const LossColorBall = styled(InvestingColorBall)`
  background-color: #d2d2d2;
`;

const Amount = styled.div`
  font-size: 1.4rem;
`;

export default React.memo(DoughnutContainerAllTab);
