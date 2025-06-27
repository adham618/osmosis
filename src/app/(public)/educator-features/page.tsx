import type { Metadata } from 'next'

import EducatorFeaturesBanner from './components/educator-features-banner'
import EducatorFeaturesAbout from './components/educator-features-about'
import EducatorFeaturesCta from './components/educator-features-cta'
import EducatorFeatures from './components/educator-features'

import PartnersSection from '@/app/(public)/(home)/components/partners-section'

export const metadata: Metadata = {
  title: 'Features for Educators',
  description:
    'We offer a suite of features that help educators create new experiences, or bring existing ones to life in their classroom.'
}

export default function EducatorFeaturesPage() {
  return (
    <main>
      <EducatorFeaturesBanner />
      <EducatorFeatures />
      <PartnersSection />
      <EducatorFeaturesAbout />
      <EducatorFeaturesCta />
    </main>
  )
}
