import type { Metadata } from 'next'

import SignUp from './signup'

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Create your account to access AR-powered educational experiences and next-generation classroom tools.'
}

export default function SiginUpPage() {
  return <SignUp />
}
