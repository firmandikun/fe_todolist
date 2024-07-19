import RegisterForm from '@/components/auth/FormRegister'
import AuthLayout from '@/layout/AuthLayout'
import React from 'react'

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
  </AuthLayout>
  )
}

export default Register