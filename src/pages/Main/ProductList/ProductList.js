import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import MainLoanInfo from '../MainLoanInfo/MainLoanInfo';
import fetchData from '../../../service/data-fetch';
import axios from 'axios';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      initialItems: 0,
      items: 6,
    };

    this.data = new fetchData();
  }

  componentDidMount() {
    this.data.listView().then(res => {
      this.setState({
        initialList: res.investments,
        productList: res.investments.slice(0, this.state.items),
      });
    });

    window.addEventListener('scroll', () => {
      this.infiniteScroll();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.items !== prevState.items) {
      this.setState({
        productList: [...this.state.initialList.slice(0, this.state.items)],
      });
    }
  };

  infiniteScroll = () => {
    const { items } = this.state;

    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight > scrollHeight - 416) {
      this.state.items < 20 &&
        this.setState({
          initialItems: items,
          items: items + (items === 18 ? 2 : 6),
        });
    }
  };

  render() {
    const { productList } = this.state;
    return (
      <>
        <ProductContainer>
          <Header>모집중 상품</Header>
          <ProductWrapper>
            {productList.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </ProductWrapper>
        </ProductContainer>
        {this.state.productList.length === 20 ? <MainLoanInfo /> : ''}
      </>
    );
  }
}

const ProductContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.p`
  font-size: 1.8em;
  font-weight: 700;
  color: ${props => props.theme.black};
  margin: 30px 0;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px 50px;
`;

export default ProductList;
