import type { Metadata } from 'next'

import Login from './login'

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Sign in to access AR-powered educational experiences and next-generation classroom tools.'
}

export default function LoginPage() {
  return <Login />
}
