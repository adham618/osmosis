import { Metadata } from 'next'

import EducatorPricing from './educator-pricing'

import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Straightforward and easy-to-understand subscription plans for educators and students.'
}

export default function EducatorPricingPage() {
  return (
    <main>
      <Breadcrumb
        title="Pricing"
        subtitle="Straightforward and easy-to-understand subscription plans"
        img="/assets/img/bg/banner2.png"
      />
      <EducatorPricing />
    </main>
  )
}
