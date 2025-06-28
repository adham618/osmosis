import type { Metadata } from 'next'

import Verification from './verification'

export const metadata: Metadata = {
  title: 'Verification Complete',
  description:
    'Your email address has been successfully verified. You now have full access to Osmosis - AR, the platform integrating Augmented Reality into Next-Gen Classrooms.'
}

export default function VeritificationPage() {
  return <Verification />
}
