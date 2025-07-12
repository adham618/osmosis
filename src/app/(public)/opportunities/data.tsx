import type { Job } from './job-card'

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Learning Labs Inc.',
    location: 'Remote',
    type: 'Internship',
    level: 'Entry',
    salary: '$25 - $30 per hour',
    description:
      'Gain hands-on experience in software development while working on real projects that impact education. This internship offers mentorship and learning opportunities in a collaborative environment.',
    requirements: [
      'Currently pursuing CS degree',
      'Knowledge of JavaScript and React',
      'Strong problem-solving skills',
      'Excellent communication abilities',
      'Available for 3-month commitment'
    ],
    benefits: [
      'Mentorship program',
      'Flexible schedule',
      'Professional development',
      'Potential for full-time offer',
      'Remote work experience'
    ],
    category: 'Engineering',
    remote: true,
    posted: '1 week ago',
    deadline: '2025-08-05',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Learning Labs Inc.',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Mid',
    salary: '$90,000 - $120,000',
    description:
      'Join our product team to drive innovation in educational technology. You will work closely with engineering, design, and business teams to define and execute product roadmaps that impact millions of students.',
    requirements: [
      '3+ years of product management experience',
      'Experience with agile development methodologies',
      'Strong analytical and communication skills',
      'Background in education or EdTech preferred',
      'MBA or equivalent experience'
    ],
    benefits: [
      'Comprehensive health benefits',
      'Stock options',
      'Flexible work hours',
      'Learning and development opportunities',
      'Team building activities'
    ],
    category: 'Product',
    remote: false,
    posted: '1 week ago',
    deadline: '2025-08-20',
    isFeatured: true
  }
]
