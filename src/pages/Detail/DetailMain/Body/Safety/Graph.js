import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Data from './Data';
import useCurrency from '../../../../../utils/useCurrency';
import styled from 'styled-components';

const Graph = props => {
  const { target_amount, evaluation, bond, collection } = props;
  const { handleBillion } = useCurrency();
  const spare = evaluation - bond - target_amount;

  const expData = {
    datasets: [
      {
        data: [bond, target_amount, spare],
        borderWidth: 0,
        hoverBorderWidth: 0,
        backgroundColor: ['#dee2e7', '#adb5bd', '#3282f0'],
        cutout: '70%',
      },
    ],
  };

  return (
    <GraphWrapper>
      <DoughnutWrapper>
        <Doughnut data={expData} />
      </DoughnutWrapper>
      <Evaluation>
        <Rate>감정가</Rate>
        <Amount>{handleBillion(evaluation)}억원</Amount>
      </Evaluation>
      <Data
        target_amount={target_amount}
        bond={bond}
        evaluation={evaluation}
        spare={spare}
        collection={collection}
      />
    </GraphWrapper>
  );
};

export default Graph;

const GraphWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 3rem 3rem 3rem;
  border-bottom: 1px solid #f1f3f5;
`;

const DoughnutWrapper = styled.div`
  flex: 0 1 24rem;
  margin-right: auto;
  margin-bottom: 5rem;
`;

const Evaluation = styled.div`
  position: absolute;
  top: 13rem;
  left: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #495057;
`;

const Rate = styled.div`
  margin-bottom: 1rem;
  font-size: ${props => props.theme.middleFont};
  line-height: 1;
  letter-spacing: -0.04rem;
`;

const Amount = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
`;
