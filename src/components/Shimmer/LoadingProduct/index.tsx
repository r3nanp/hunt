/* eslint-disable no-use-before-define */
import React from 'react'
import Skeleton from '../../Skeleton'

import { Container } from './styles'

const LoadingProduct: React.FC = () => {
  return (
    <Container>
      <Skeleton />
    </Container>
  )
}

export default LoadingProduct
