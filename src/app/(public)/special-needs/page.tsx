import type { Metadata } from 'next'

import SpecialNeedsBanner from './components/special-needs-banner'
import AboutSpecialNeeds from './components/about-special-needs'

export const metadata: Metadata = {
  title: 'AR for Children with Special Needs',
  description:
    'Making a difference where it matters most. AR opens the door to many new possibilities within the field of special education, not only for professionals, but also for parents and caregivers. All Osmosis courses are designed with accessibility in mind, and many are tailored to the needs of students with visual, hearing, or motor impairments.'
}

export default function SpecialNeedsPage() {
  return (
    <main>
      <SpecialNeedsBanner />
      <AboutSpecialNeeds />
    </main>
  )
}
