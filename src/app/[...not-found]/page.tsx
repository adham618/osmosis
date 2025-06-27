import type { Metadata } from 'next'

import Error from '@/components/error'
import Layout from '@/layouts/layout'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description:
    'The page you are looking for does not exist. Please check the URL or navigate back to the homepage.'
}

export default function NotFoundPage() {
  return (
    <Layout>
      <Error />
    </Layout>
  )
}
