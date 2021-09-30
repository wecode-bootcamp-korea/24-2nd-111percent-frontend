import React from 'react';
import Article from './Article';
import Aside from './Aside';
import styled from 'styled-components';

function InvestSummary({
  deposit,
  investing,
  investmentCompleted,
  loss,
  investingTab,
  accountNumber,
  rankTab,
  yieldTab,
  rateOfReturn,
  cumulativeProfit,
  depositPlus,
  setDepositPlus,
}) {
  return (
    <InvestSummaryContainer>
      <Aside
        deposit={deposit}
        investmentCompleted={investmentCompleted}
        loss={loss}
        investingTab={investingTab}
        accountNumber={accountNumber}
        depositPlus={depositPlus}
        setDepositPlus={setDepositPlus}
      />
      <Article
        deposit={deposit}
        investing={investing}
        investmentCompleted={investmentCompleted}
        loss={loss}
        investingTab={investingTab}
        rankTab={rankTab}
        yieldTab={yieldTab}
        rateOfReturn={rateOfReturn}
        cumulativeProfit={cumulativeProfit}
        depositPlus={depositPlus}
      />
    </InvestSummaryContainer>
  );
}

const InvestSummaryContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 0.75rem;
  max-width: 91.5rem;
`;

export default InvestSummary;
