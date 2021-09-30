import React from 'react';
import Graph from './Graph';
import useCurrency from '../../../../../utils/useCurrency';
import styled from 'styled-components';

function Safety(props) {
  const { investment } = props;
  const {
    target_amount,
    evaluation_price,
    priority_bond_amount,
    bidding_rate,
  } = investment;

  const { handleBillion } = useCurrency();

  const collection =
    bidding_rate * 0.01 * evaluation_price - priority_bond_amount;

  return (
    <Wrapper>
      <H1>담보 안정성</H1>
      <Graph
        evaluation={evaluation_price}
        bond={priority_bond_amount}
        target_amount={target_amount}
        bidding_rate={bidding_rate}
        collection={collection}
      />
      <Letter>
        해당 상품의 감정가는 KB시세 일반가 적용이며 경기 남양주시 화도읍 최근
        3개월 낙찰가율은 {bidding_rate}%로 회수예상가액은{' '}
        {handleBillion(collection)}억원 입니다.(단, 낙찰가율이 100%를 초과하는
        경우 100% 적용)
      </Letter>
    </Wrapper>
  );
}

export default Safety;

const Wrapper = styled.div`
  margin-bottom: 8rem;
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  color: ${props => props.theme.black};
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.27;
`;

const Letter = styled.div`
  margin-top: 3rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: ${props => props.theme.gray};
`;
