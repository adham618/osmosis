import { Metadata } from 'next'

import GridBlog from '@/components/grid-blog'

export const metadata: Metadata = {
  title: 'Grid Blog Edumon - Education Next JS Template',
  description:
    'Transform your educational website with Edumon - the ultimate Next template thats powered by the latest Bootstrap technology. Impress your visitors with sleek animations, a user-friendly contact form, and seamless course integration. Elevate your online presence and engage your audience like never before with Edumon!'
}

export default function index() {
  return <GridBlog />
}
