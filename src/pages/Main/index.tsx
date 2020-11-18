/* eslint-disable no-use-before-define */
import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import { Container, ProductList, Actions } from './styles'

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductList>
          <article>
            <strong>React Native</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit
              recusandae repudiandae suscipit ex debitis officia voluptatum
              dolorem, laudantium perspiciatis deserunt sit cum corrupti! Facere
              vel ratione fugit harum dignissimos!
            </p>

            <Link to="/product">Acessar</Link>
          </article>
        </ProductList>

        <Actions>
          <button>Anterior</button>
          <button>Próximo</button>
        </Actions>
      </Container>
    </>
  )
}

export default Main
