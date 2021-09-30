import React from 'react';
import useCurrency from '../../../../utils/useCurrency';
import styled from 'styled-components';

function Summary(props) {
  const { investment } = props;
  const { loan_type, evaluation_price, repayment_day, LTV } = investment;
  const { handleCurrency } = useCurrency();

  return (
    <Wrapper>
      <H1>상품 개요</H1>
      <Table>
        <tbody>
          <tr>
            <th>대출예정금액</th>
            <td>{handleCurrency(investment.target_amount)}원</td>
            <th>상환일자</th>
            <td>매월 {repayment_day}일</td>
          </tr>
          <tr>
            <th>대출종류</th>
            <td>{loan_type}</td>
            <th>자금용도</th>
            <td>생활 자금</td>
          </tr>
          <tr>
            <th>감정가</th>
            <td>{handleCurrency(evaluation_price)}원</td>
            <th>담보비율</th>
            <td>LTV {LTV.toFixed(2)}%</td>
          </tr>
          <tr>
            <th rowSpan="3">상환계획</th>
            <td colSpan="3">
              1. 대출자의 자체 자금
              <br />
              2. 타금융기관 또는 8퍼센트 대출을 통한 상환
              <br />
              3. 경매 또는 채권매각 (NPL)
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default Summary;

const Wrapper = styled.div`
  margin-bottom: 8rem;
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.27;
`;

const Table = styled.table`
  width: 100%;
  padding: 2reem;
  border-collapse: collapse;
  color: #858d94;

  th,
  td {
    border: 1px solid #dee2e6;
    border-left: none;
    padding: 1.2rem 2rem;
    font-size: ${props => props.theme.smallFont};
    text-align: start;
    line-height: 1.15;
  }

  th {
    width: 20%;
    background-color: #f8f9fa;
    padding: 1.4rem 2rem;
    font-weight: 400;
  }

  td {
    width: 30%;
    color: #4b525a;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: -0.04rem;

    &:last-child {
      border-right: none;
    }
  }
`;
