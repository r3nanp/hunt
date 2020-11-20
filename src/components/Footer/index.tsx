/* eslint-disable no-use-before-define */
import React from 'react'

import { Container, GithubLogo, LinkedinLogo } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <a
        href="https://github.com/r3nanp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubLogo />
      </a>
      <a
        href="https://linkedin/in/r3nanp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedinLogo />
      </a>
    </Container>
  )
}

export default Footer
