/* eslint-disable no-use-before-define */
import React from 'react'

import Header from './components/Header'
import GlobalStyles from './styles/global'

function App(): JSX.Element {
  return (
    <>
      <Header />

      <GlobalStyles />
    </>
  )
}

export default App
