import React from 'react'
import 'styled-components/macro'

import { LoginForm } from './forms'

import { Layout } from '../../components'

export default function Login() {
  return (
    <Layout.AuthBackground>
      <LoginForm />
    </Layout.AuthBackground>
  )
}
