import React from 'react';
import useCurrency from '../../../../utils/useCurrency';
import styled from 'styled-components';

function Borrower(props) {
  const { investment } = props;
  const { handleCurrency } = useCurrency();

  const {
    credit_score,
    income_type,
    income,
    loan_amount,
    is_overdue,
    overdue_tax,
    card_usage_amount,
  } = investment;

  return (
    <Wrapper>
      <H1>대출자 정보</H1>
      <Table>
        <tbody>
          <tr>
            <th>KCB 점수</th>
            <td colSpan="3">{credit_score}점</td>
          </tr>
          <tr>
            <th>소득형태</th>
            <td>{income_type}</td>
            <th>소득</th>
            <td>월 평균 {handleCurrency(income)}원</td>
          </tr>
          <tr>
            <th>카드사용액</th>
            <td>월 평균 {handleCurrency(card_usage_amount)}원</td>
            <th>
              대출잔액<span>(본건제외)</span>
            </th>
            <td>{handleCurrency(loan_amount)}원</td>
          </tr>
          <tr>
            <th>30일 이상 면제</th>
            <td>{is_overdue}</td>
            <th>체납 세금</th>
            <td>
              {overdue_tax > 0
                ? `${handleCurrency(overdue_tax)}원`
                : '해당 없음'}
            </td>
          </tr>
        </tbody>
      </Table>
      <CreditInfo>※ 2021년 09월 03일 기준 신용정보</CreditInfo>
    </Wrapper>
  );
}

export default Borrower;

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
  margin-bottom: 2rem;
  padding: 2rem;
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

    &:last-child {
      border-right: none;
    }
  }
`;

const CreditInfo = styled.span`
  color: #606060;
  font-size: 1.4rem;
  line-height: 1.15;
`;
