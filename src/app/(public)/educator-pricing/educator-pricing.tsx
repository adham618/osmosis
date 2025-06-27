import * as React from 'react'

import PriceCard from './price-card'

const pricingPlans = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 64 64" width="64" height="64" className="pricing-icon">
        <defs>
          <linearGradient id="starterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#DA70D6" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="20" r="12" fill="url(#starterGradient)" className="icon-shape" />
        <ellipse
          cx="32"
          cy="44"
          rx="20"
          ry="16"
          fill="url(#starterGradient)"
          className="icon-shape"
        />
      </svg>
    ),
    price: '$15/mo.',
    title: 'Starter Plan',
    subtitle: 'For Trials',
    features: [
      { text: '✓ Access to Osmosis Client', type: 'included' as const },
      { text: '✓ Access to Nucleus Dashboard', type: 'included' as const },
      { text: '✓ 24/7 Educator Support', type: 'included' as const },
      { text: '~ Trial Version of Nucleus Export', type: 'limited' as const },
      { text: '~ Demo Version of Osmosis Studio', type: 'limited' as const },
      { text: '✗ No Discount on Headset Packages', type: 'excluded' as const },
      { text: '✗ No Access to Premium Courses', type: 'excluded' as const }
    ],
    buttonText: 'Get Started',
    href: '/dashboard/login'
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 64 64" width="64" height="64" className="pricing-icon">
        <defs>
          <linearGradient id="classroomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#DA70D6" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="16" r="8" fill="url(#classroomGradient)" className="icon-shape" />
        <circle cx="44" cy="16" r="8" fill="url(#classroomGradient)" className="icon-shape" />
        <circle cx="32" cy="28" r="10" fill="url(#classroomGradient)" className="icon-shape" />
        <ellipse
          cx="20"
          cy="40"
          rx="12"
          ry="10"
          fill="url(#classroomGradient)"
          className="icon-shape"
        />
        <ellipse
          cx="44"
          cy="40"
          rx="12"
          ry="10"
          fill="url(#classroomGradient)"
          className="icon-shape"
        />
        <ellipse
          cx="32"
          cy="50"
          rx="16"
          ry="12"
          fill="url(#classroomGradient)"
          className="icon-shape"
        />
      </svg>
    ),
    price: '$35/mo. /user',
    title: 'Classroom Plan',
    subtitle: 'For Classrooms',
    features: [
      { text: '✓ Access to Osmosis Client', type: 'included' as const },
      { text: '✓ Access to Nucleus Dashboard', type: 'included' as const },
      { text: '✓ 24/7 Educator Support', type: 'included' as const },
      { text: '✓ Access to Premium Courses', type: 'included' as const },
      { text: '✓ Full Access to Nucleus Export', type: 'included' as const },
      { text: '✓ Full Access to Osmosis Studio', type: 'included' as const },
      { text: '✓ 15% Discount on Headset Packages', type: 'included' as const }
    ],
    buttonText: 'Get Started',
    href: '/dashboard/login'
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 64 64" width="64" height="64">
        <defs>
          <linearGradient id="enterpriseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#DA70D6" />
          </linearGradient>
        </defs>
        <rect
          x="8"
          y="16"
          width="48"
          height="40"
          fill="url(#enterpriseGradient)"
          rx="2"
          className="icon-shape"
        />
        <rect
          x="12"
          y="20"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="22"
          y="20"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="32"
          y="20"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="42"
          y="20"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="12"
          y="30"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="22"
          y="30"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="32"
          y="30"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="42"
          y="30"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="12"
          y="40"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="22"
          y="40"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="32"
          y="40"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="42"
          y="40"
          width="6"
          height="6"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="26"
          y="8"
          width="12"
          height="12"
          fill="url(#enterpriseGradient)"
          rx="1"
          className="icon-shape"
        />
        <rect
          x="28"
          y="10"
          width="2"
          height="2"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="32"
          y="10"
          width="2"
          height="2"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="28"
          y="14"
          width="2"
          height="2"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
        <rect
          x="32"
          y="14"
          width="2"
          height="2"
          fill="white"
          opacity="0.8"
          className="icon-detail"
        />
      </svg>
    ),
    price: 'Contact Sales',
    title: 'Something Bigger',
    subtitle: 'For Schools',
    features: [
      { text: '✓ Access to Osmosis Client', type: 'included' as const },
      { text: '✓ Access to Nucleus Dashboard', type: 'included' as const },
      { text: '✓ 24/7 Educator Support', type: 'included' as const },
      { text: '✓ Access to Premium Courses', type: 'included' as const },
      { text: '✓ Full Access to Nucleus Export', type: 'included' as const },
      { text: '✓ Full Access to Osmosis Studio', type: 'included' as const },
      { text: '✓ 25% Discount on Headset Packages', type: 'included' as const }
    ],
    buttonText: 'Contact Sales',
    href: '/dashboard/login'
  }
]

export default function EducatorPricing() {
  return (
    <section className="features fstyle-2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <div className="section-title text-center">
              <span>Subscriptions</span>
              <h2>Our Plans</h2>
            </div>
          </div>

          {pricingPlans.map((plan, index) => (
            <PriceCard
              key={index}
              icon={plan.icon}
              price={plan.price}
              title={plan.title}
              subtitle={plan.subtitle}
              features={plan.features}
              buttonText={plan.buttonText}
              href={plan.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
