import type { Metadata } from 'next'

import K12Banner from './components/k12-banner'
import AboutK12 from './components/about-k12'
import CtaStudent from './components/cta-student'

export const metadata: Metadata = {
  title: 'Transforming K-12 Education',
  description:
    'Bringing textbooks to life through interactive 3D experiences. Osmosis offers a new way to learn immersively with over 50 courses in 12+ subjects, tailored for K-12, Special Needs, and College & Beyond.'
}

export default function K12Page() {
  return (
    <main>
      <K12Banner />
      <AboutK12 />
      <CtaStudent />
    </main>
  )
}
