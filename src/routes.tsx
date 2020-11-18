/* eslint-disable no-use-before-define */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import Product from './pages/Product'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
