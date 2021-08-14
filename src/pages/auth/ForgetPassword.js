import React from 'react'
import 'styled-components/macro'

import { ForgetPasswordForm } from './forms'

import { Layout } from '../../components'

export default function ForgetPassword() {
  return (
    <Layout.AuthBackground>
      <ForgetPasswordForm />
    </Layout.AuthBackground>
  )
}
