import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import useCurrency from '../../../utils/useCurrency';

const Carousel = ({ product, bgColorId }) => {
  const colorData = ['#3A5E9D', '#628F92', '#A3B9D3', '#834C4C', '#8B9C5A'];
  const { handleCurrency } = useCurrency();
  const history = useHistory();

  const bgColorPick = id => {
    const color = colorData[id % colorData.length];
    return color;
  };

  return (
    <Product bgColor={bgColorPick(bgColorId)}>
      <DealDescription>
        <ProductTitle>{product.name}</ProductTitle>
        <DealRate>
          {product.return_rate.toFixed(2)}
          <Percentage>%</Percentage>
        </DealRate>
        <DealInfo>
          <ProductGrade>{product.grade}</ProductGrade>
          <DealEarningAmount>
            {product.duration}개월
            <DealEarningAmount>/</DealEarningAmount>
            {handleCurrency(product.target_amount)}
            <Won>원</Won>
          </DealEarningAmount>
        </DealInfo>
        <Button
          onClick={() => {
            history.push(`/detail/${product.id}`);
          }}
        >
          상품 보러가기
        </Button>
      </DealDescription>
      <ImgWrapper>
        <ProductImg src={product.image} />
      </ImgWrapper>
    </Product>
  );
};

const Product = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.bgColor};
`;

const DealDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

const ProductTitle = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: -0.07em;
`;

const DealRate = styled.span`
  font-size: 7em;
  margin-top: 15px;
`;

const Percentage = styled.span`
  font-size: 1.7rem;
  font-weight: 700;
`;

const DealInfo = styled.div`
  margin-top: 1.8rem;
`;

const ProductGrade = styled.span`
  font-size: 0.6em;
  border: 1px solid #fff;
  border-radius: 3px;
  margin-right: 0.3em;
`;

const DealEarningAmount = styled.span`
  font-size: 1.4rem;
  margin: 0 5px;
`;

const Won = styled.span`
  font-size: 1.4rem;
  margin-left: -0.2em;
`;

const Button = styled.button`
  width: 110px;
  padding: 13px 0;
  border-radius: 5px;
  color: ${props => props.theme.gray};
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin-top: 3.5rem;
  box-shadow: 0 3px 8px ${props => props.theme.gray};

  &:hover {
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  width: 32em;
  height: 32em;
  margin: 3em;
  position: relative;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  box-shadow: 8px 5px 20px #505050;
`;

export default Carousel;
