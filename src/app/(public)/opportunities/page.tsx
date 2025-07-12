import { Metadata } from 'next'

import Opportunities from './opportunities'

import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Opportunities',
  description:
    'Discover job opportunities and career paths available through our platform. Explore open positions, internships, and ways to join our team or contribute to the community.'
}

export default function OpportunitiesPage() {
  return (
    <main>
      <Breadcrumb
        title="Opportunities"
        subtitle="Explore current openings and ways to get involved"
        img="/assets/img/bg/banner1.png"
      />

      <Opportunities />
    </main>
  )
}
