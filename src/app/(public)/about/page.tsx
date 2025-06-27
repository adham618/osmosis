import type { Metadata } from 'next'

import About from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Osmosis, the home for students and educators. Discover our mission, opportunities, and how we support learning and growth. Get started with us today and explore our offerings.'
}

export default function AboutUsPage() {
  return <About />
}
