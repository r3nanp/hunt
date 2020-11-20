/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import api from '../../services/api'

import { Container, ProductList, Actions } from './styles'

interface ProductProps {
  _id: string
  title: string
  description: string
}

const Main: React.FC = () => {
  const [data, setData] = useState<ProductProps[]>([])

  useEffect(() => {
    api.get('products').then(async response => {
      const data = await response.data
      setData(data.docs)
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <ProductList>
          {data.map(product => (
            <article key={product._id}>
              <strong>{product.title}</strong>
              <p>{product.description}</p>
              <Link to={`/product/${product._id}`}>Acessar</Link>
            </article>
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
