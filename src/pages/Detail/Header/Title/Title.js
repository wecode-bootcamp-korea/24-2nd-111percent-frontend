import React from 'react';
import StatusBar from './StatusBar';
import { Helmet } from 'react-helmet';
import useCurrency from '../../../../utils/useCurrency';
import styled from 'styled-components';

function Title(props) {
  const { investment } = props;
  const { current_amount, target_amount } = investment;
  const { handleMillion } = useCurrency();

  return (
    <TitleWrapper>
      <Helmet>
        <title>{`${investment.id}호:${investment.name}`}</title>
      </Helmet>
      <Wrapper>
        <div>
          <DetailIndex>{investment.id}호</DetailIndex>
          <H1>{investment.name}</H1>
        </div>
        <DirWrapper>
          <Dl>
            <dt>등급</dt>
            <dd>{investment.grade}</dd>
          </Dl>
          <Dl>
            <dt>수익률</dt>
            <dd>{investment.return_rate}%</dd>
          </Dl>
          <Dl>
            <dt>상환기간</dt>
            <dd>{investment.duration}개월</dd>
          </Dl>
          <Dl>
            <dt>상환방식</dt>
            <dd>{investment.repayment_types}</dd>
          </Dl>
          <Dl>
            <dt>모집현황</dt>
            <dd>
              {handleMillion(current_amount)} / {handleMillion(target_amount)}{' '}
              만원
            </dd>
          </Dl>
        </DirWrapper>
      </Wrapper>
      <StatusBar current={current_amount} target={target_amount} />
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  padding: 6rem 0;
`;

const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media only screen and (max-width: 1079px) {
    max-width: 730px;
  } ;
`;

const DetailIndex = styled.div`
  margin-bottom: 1rem;
  font-size: ${props => props.theme.middleFont};
  line-height: 1.38;
  letter-spacing: -0.03rem;
  color: #858d94;
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 3.2rem;
  line-height: 4.8rem;
  letter-spacing: -0.1rem;
`;

const DirWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const Dl = styled.dl`
  padding: 0 2.5rem;
  border-left: 1px solid #f1f3f5;

  &:first-child {
    padding-left: 0;
    border: none;
  }

  dt {
    margin-bottom: 1rem;
    font-size: ${props => props.theme.smallFont};
    letter-spacing: -0.02rem;
    color: #858d94;
  }

  dd {
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: -0.05rem;
  }
`;
