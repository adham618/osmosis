export const siteConfig = {
  name: 'Osmosis - AR',
  short_name: 'Osmosis',
  description:
    'Integrating AR into Next-Gen Classrooms. Bringing Augmented Reality to education at every level.',
  links: {
    twitter: 'https://twitter.com/osmosis-ar'
  },
  keywords: [
    'Osmosis - AR',
    'Augmented Reality',
    'Next-Gen Classrooms',
    'AR in Education',
    'Virtual Reality',
    'Interactive Learning',
    'AR/VR Integration',
    'Education Technology',
    'Learning through Experience',
    'AR Courses',
    'VR Courses',
    'Educational Platform',
    'AR/VR Solutions',
    'Classroom AR',
    'Classroom VR',
    'AR/VR Training',
    'AR/VR Support',
    'AR/VR Development',
    'AR/VR Collaboration',
    'AR/VR Experiences'
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`,
  twitter: '@OsmosisAR',
  indexingEnabled: process.env.NEXT_PUBLIC_INDEXING_ENABLED === 'true'
}

export type SiteConfig = typeof siteConfig
