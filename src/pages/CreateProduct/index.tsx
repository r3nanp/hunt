/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import * as yup from 'yup'

import api from '../../services/api'
import Input from '../../components/Input'
import { Container, Register, Button } from './styles'

interface FormData {
  title: string
  description: string
  url: string
}

interface ValidationErrors {
  [key: string]: string
}

const CreateProduct: React.FC = () => {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async (
    data,
    { reset },
    event
  ) => {
    try {
      formRef?.current?.setErrors({})

      const schema = yup.object().shape({
        title: yup.string().max(150).min(4).required(),
        description: yup.string().min(6).required(),
        url: yup.string().url().min(5).required(),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      event?.preventDefault()
      const response = await api.post('/create/product', data)

      if (response.status === 201) {
        reset()
        alert('Register successful!')
        history.push('/')
      }
    } catch (err) {
      const errors: ValidationErrors = {}

      if (err instanceof yup.ValidationError) {
        err.inner.forEach(error => {
          errors[error.path] = error.message
        })

        formRef?.current?.setErrors(errors)

        console.error(errors)
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Register>
          <legend>Register your amazing app</legend>
        </Register>

        <label htmlFor="title">Title</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <Input
          name="description"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <label htmlFor="url">Url</label>
        <Input
          name="url"
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />

        <Button type="submit">Register product</Button>
      </Form>
    </Container>
  )
}

export default CreateProduct
