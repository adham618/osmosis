export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  number: string
  className?: string
}

export interface FeatureData {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  number: string
}

export interface FeaturesSectionProps {
  features?: FeatureData[]
  sectionTitle?: string
  sectionSubtitle?: string
  className?: string
}
