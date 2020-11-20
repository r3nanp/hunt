/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface InputProps {
  name: string
}

type Props = JSX.IntrinsicElements['input'] & InputProps

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'error' : ''}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </Container>
  )
}

export default Input
