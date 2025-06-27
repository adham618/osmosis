import type { Metadata } from 'next'

import CollegeBeyondBanner from './components/college-beyond-banner'
import AboutCollegeBeyond from './components/about-college-beyond'

export const metadata: Metadata = {
  title: 'College & Beyond - Augmenting Higher Education',
  description:
    'AR unlocks new possibilities in undergraduate and graduate education, particularly in science, technology, and medicine. Osmosis offers advanced courses, labs, and simulations to enhance learning experiences.'
}

export default function CollegeBeyondPage() {
  return (
    <main>
      <CollegeBeyondBanner />
      <AboutCollegeBeyond />
    </main>
  )
}
