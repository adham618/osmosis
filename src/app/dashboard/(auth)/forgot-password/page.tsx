import type { Metadata } from 'next'

import ForgotPassword from './forgot-password'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Enter your email address to receive a password reset link for your account.'
}

export default function ForgotPage() {
  return <ForgotPassword />
}
