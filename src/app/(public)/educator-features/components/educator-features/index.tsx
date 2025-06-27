import React from 'react'

import FeatureCard from './feature-card'
import {
  HardwareSetupIcon,
  InstructorTrainingIcon,
  ClassroomManagementIcon,
  ReportingAssessmentIcon
} from './feature-icons'

interface FeatureData {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  number: string
}

const FeaturesSection: React.FC = () => {
  const features: FeatureData[] = [
    {
      id: 'hardware-setup',
      icon: <HardwareSetupIcon />,
      title: 'Hardware Setup',
      description:
        'Osmosis offers several options for hardware setup - quickly install and start on your own devices, or choose from several packages for pre-configured, plug-and-play devices.',
      number: '01'
    },
    {
      id: 'instructor-training',
      icon: <InstructorTrainingIcon />,
      title: 'Instructor Training',
      description:
        "Osmosis offers comprehensive training and support for educators hoping to use AR and VR within their classrooms. We're here to help you provide a wonderful experience for your students.",
      number: '02'
    },
    {
      id: 'classroom-management',
      icon: <ClassroomManagementIcon />,
      title: 'Classroom Management',
      description:
        "Osmosis labs and courses are all designed to be flexible and easy to manage for different class sizes and instructional modes. Osmosis' <b>Nucleus</b> dashboard allows you to track progress and set learning goals.",
      number: '03'
    },
    {
      id: 'reporting-assessment',
      icon: <ReportingAssessmentIcon />,
      title: 'Reporting and Assessment',
      description:
        '<b>Nucleus</b> exports detailed reports for every student, and allows automatic synchronization with your LMS.',
      number: '04'
    }
  ]

  return (
    <section className="features fstyle-2 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12" data-aos="fade-up">
            <div className="section-title text-center">
              <span>Features for Educators</span>
              <h2>Support at every step, from start to finish</h2>
            </div>
          </div>

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              number={feature.number}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
