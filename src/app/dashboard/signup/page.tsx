import type { Metadata } from 'next'

import SiginUp from '@/components/register'

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Create your account to access AR-powered educational experiences and next-generation classroom tools.'
}

export default function SiginUpPage() {
  return <SiginUp />
}
