import React from 'react';
import PointList from './PointList';
import useCurrency from '../../../../../utils/useCurrency';
import styled from 'styled-components';

function InvestPoint(props) {
  const { investment } = props;
  const { handleCurrency } = useCurrency();

  const getRate = amount => {
    const rate = amount * (1 + investment.return_rate * 0.01);
    return rate;
  };

  const points = [
    {
      name: '양호한 LTV 비율과 채권보전',
      detail: `잔액 기준 LTV ${investment.LTV.toFixed(
        2
      )}%로 낙찰가율 대비 비교적 양호합니다.`,
      img: '/assets/icons/money.png',
    },
    {
      name: '생활환경과 입지조건',
      detail:
        '인근 900m 내에 장기역이 있고 도보 10분 거리에 초등학교, 중학교가 있는 생활환경이 조성된 단지입니다',
      img: '/assets/icons/placeholder.png',
    },
    {
      name: '첫 예상 지급일 11월 30일',
      detail: `500만원 투자 시 ${handleCurrency(
        getRate(5000000)
      )}원의 수익이 만기일시상환 방식으로 지급됩니다.`,
      img: '/assets/icons/calendar.png',
    },
  ];

  return (
    <Wrapper>
      <H1>투자 포인트</H1>
      <ul>
        {points.map(item => (
          <PointList item={item} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default InvestPoint;

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
