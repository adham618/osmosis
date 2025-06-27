import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  number: string
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  number,
  className = ''
}) => {
  return (
    <div className={`col-xl-3 mb-4 col-lg-4 col-md-6 col-12 ${className}`} data-aos="fade-in">
      <div className="feature-item">
        <div className="fea-icon mx-auto">{icon}</div>
        <h3>{title}</h3>
        <p className="flex-grow-1" dangerouslySetInnerHTML={{ __html: description }} />
        <span className="fnumber">{number}</span>
      </div>
    </div>
  )
}

export default FeatureCard
