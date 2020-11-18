/* eslint-disable no-use-before-define */
import React from 'react'

import Routes from './routes'
import GlobalStyles from './styles/global'

function App(): JSX.Element {
  return (
    <>
      <Routes />

      <GlobalStyles />
    </>
  )
}

export default App
