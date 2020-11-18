/* eslint-disable no-use-before-define */
import React from 'react'

import Header from '../../components/Header'

import { Container, ProductInfo } from './styles'

const Product: React.FC = () => {
  return (
    <Container>
      <Header />
      <ProductInfo>
        <h1>title</h1>
        <p>description</p>
        <p>
          URL: <a href="#">SomeWhere</a>
        </p>
      </ProductInfo>
    </Container>
  )
}

export default Product
