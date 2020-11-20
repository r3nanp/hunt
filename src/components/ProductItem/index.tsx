/* eslint-disable no-use-before-define */
import React from 'react'
import LoadingMain from '../Shimmer/LoadingMain'

import { Container } from './styles'

const ProductItem: React.FC<isLoadingProps> = ({ isLoading, children }) => {
  return (
    <Container>{isLoading ? <LoadingMain /> : <> {children} </>}</Container>
  )
}

export default ProductItem
