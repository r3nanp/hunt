/* eslint-disable multiline-ternary */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductItem from '../../components/ProductItem'

import { Container, ProductList, Actions } from './styles'

interface ProductProps {
  _id: string
  title: string
  description: string
}

const Main: React.FC = () => {
  const [data, setData] = useState<ProductProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.get('products').then(async response => {
      const data = await response.data
      const res = await data.docs
      setData(res)
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <ProductList>
          {data.map(product => (
            <ProductItem isLoading={isLoading} key={product._id}>
              <strong>{product.title}</strong>
              <p>{product.description}</p>
              <Link to={`/product/${product._id}`}>Acessar</Link>
            </ProductItem>
          ))}
        </ProductList>

        <Actions>
          <button>Anterior</button>
          <button>Próximo</button>
        </Actions>
      </Container>
      <Footer />
    </>
  )
}

export default Main
