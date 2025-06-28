import type { Metadata } from 'next'

import SendEmail from './send-email'

export const metadata: Metadata = {
  title: 'Check Your Email',
  description:
    'If an account under this email exists, you should receive an email with a link to reset your password.'
}

export default function SendEmailPage() {
  return <SendEmail />
}
