/* eslint-disable no-use-before-define */
import React from 'react'
import { Link } from 'react-router-dom'

import { Container, PlusIcon } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Hunt your app</h1>
      </div>

      <Link to="/create/product" className="create-product">
        <PlusIcon />
      </Link>
    </Container>
  )
}

export default Header
