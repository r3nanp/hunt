/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import api from '../../services/api'

import LoadingProduct from '../../components/Shimmer/LoadingProduct'
import { Container, ProductInfo } from './styles'

interface ProductInfo {
  title: string
  description: string
  url: string
}

interface RouteParams {
  id: string
}

const Product: React.FC = () => {
  const params = useParams<RouteParams>()
  const [data, setData] = useState<ProductInfo>()

  useEffect(() => {
    api.get(`product/${params.id}`).then(async response => {
      const data = await response.data
      setData(data)
    })
  }, [params.id])

  if (!data) {
    return <LoadingProduct />
  }

  return (
    <Container>
      <Header />
      <ProductInfo>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>
          URL:{' '}
          <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </p>
      </ProductInfo>
    </Container>
  )
}

export default Product
