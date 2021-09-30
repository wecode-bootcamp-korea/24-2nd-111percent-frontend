import React from 'react';
import useCurrency from '../../../../utils/useCurrency';
import styled from 'styled-components';

const Amount = props => {
  const { amount, return_percent } = props;
  const { handleCurrency } = useCurrency();

  const finalAmount = amount * return_percent * 10000;

  return (
    <Wrapper>
      <Title>예상 수익금</Title>
      <Number>{handleCurrency(finalAmount)}원</Number>
    </Wrapper>
  );
};

export default Amount;

const Wrapper = styled.div`
  text-align: right;
  color: ${props => props.theme.purple};
  margin-bottom: 4rem;
`;

const Title = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  margin-right: 0.3rem;
`;

const Number = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
`;
