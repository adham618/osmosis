import * as React from 'react'
import Link from 'next/link'

interface Feature {
  text: string
  type: 'included' | 'limited' | 'excluded'
}

interface PriceCardProps {
  icon: React.ReactNode
  price: string
  title: string
  features: Feature[]
  buttonText: string
  href: string
  subtitle: string
}

export default function PriceCard({
  icon,
  price,
  title,
  features,
  buttonText,
  href,
  subtitle
}: PriceCardProps) {
  return (
    <div className="col-xl-4 col-lg-4 mt-4 col-md-6 col-12">
      <div className="feature-item">
        <div className="fea-icon  mx-auto">{icon}</div>
        <h1>{price}</h1>
        <h3>{title}</h3>
        <div style={{ textAlign: 'left' }}>
          {features.map((feature, index) => (
            <p key={index}>{feature.text}</p>
          ))}
        </div>
        <Link
          href={href}
          className="btn btn-primary"
          style={{
            background: 'linear-gradient(45deg, #8A2BE2, #DA70D6)',
            border: 'none',
            margin: '20px 0',
            color: 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            WebkitTextFillColor: 'white'
          }}
        >
          {buttonText}
        </Link>
        <span className="fnumber">{subtitle}</span>
      </div>
    </div>
  )
}
