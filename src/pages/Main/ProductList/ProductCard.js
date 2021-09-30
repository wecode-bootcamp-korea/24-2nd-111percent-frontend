import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa';

const ProductList = ({ product }) => {
  const history = useHistory();
  const handleCurrency = num => {
    const Units = ['', '만', '억', '조'];
    let answer = '';
    const unit = 10000;
    let index = 0;
    let division = Math.pow(unit, index);

    while (Math.floor(num / division) > 0) {
      const mod = Math.floor((num % (division * unit)) / division);
      if (mod) {
        const modToString = mod
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        answer = `${modToString}${Units[index]} ` + answer;
      }
      division = Math.pow(unit, ++index);
    }
    return answer;
  };

  return (
    <Product
      key={product.id}
      onClick={() => {
        history.push(`/detail/${product.id}`);
      }}
    >
      <Link to="/">
        <ProductImageWrapper>
          <ProductImg src={product.image} />
        </ProductImageWrapper>
        <RecruitmentRateWrapper>
          <ChartIcon>
            <FaChartPie />
          </ChartIcon>
          <RecruitmentRate>{product.recrutement_rate}% 모집</RecruitmentRate>
        </RecruitmentRateWrapper>
        <ProductTitle>{product.name}</ProductTitle>
        <DealInfo>
          <DealRate>{product.return_rate}%</DealRate>
          <DealEarningAmount>
            {product.duration}개월
            <DealEarningAmount>• </DealEarningAmount>
            {handleCurrency(product.target_amount)}
            <Won>원 모집</Won>
          </DealEarningAmount>
        </DealInfo>
      </Link>
    </Product>
  );
};

const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 5px gray;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 360px;
  transition: transform 0.7s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const RecruitmentRateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.3em;
`;

const ChartIcon = styled.span`
  font-size: 15px;
  color: #8b1ec4;
  margin-right: 0.5em;
`;

const RecruitmentRate = styled.p`
  font-size: 1.4em;
  font-weight: 700;
  line-height: 1.5;
`;

const ProductTitle = styled.p`
  color: ${props => props.theme.gray};
  font-size: 1.4em;
  line-height: 1.25;
  margin-top: 10px;
`;

const DealInfo = styled.div`
  margin-top: 10px;
`;

const DealRate = styled.span`
  font-size: 2em;
  font-weight: 700;
  color: ${props => props.theme.black};
`;

const DealEarningAmount = styled.span`
  margin-left: 6px;
  font-size: 1.4em;
  color: ${props => props.theme.lightGray};
`;

const Won = styled.span`
  font-size: 1.4rem;
  margin-left: -0.3em;
`;

export default ProductList;
