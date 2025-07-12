import type { Job } from './job-card'

export const featuredJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Osmosis - AR',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    salary: '$120,000 - $160,000',
    description:
      'We are seeking an experienced Full Stack Developer to join our team and help build the next generation of educational technology platforms. You will work with modern technologies including React, Node.js, and cloud infrastructure.',
    requirements: [
      '5+ years of experience with React and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong knowledge of databases (PostgreSQL, MongoDB)',
      'Experience with testing frameworks',
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    category: 'Data Science',
    remote: true,
    posted: '4 days ago',
    deadline: '2025-08-18'
  },
  {
    id: '7',
    title: 'Marketing Specialist',
    company: 'Osmosis - AR',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    level: 'Entry',
    salary: '$50,000 - $70,000',
    description:
      'Help us grow our brand and reach more educators and students. You will develop marketing campaigns, manage social media, and create content that showcases our educational platform.',
    requirements: [
      '2+ years of marketing experience',
      'Experience with digital marketing',
      'Strong writing and communication skills',
      'Knowledge of social media platforms',
      "Bachelor's degree in Marketing or related field"
    ],
    benefits: [
      'Health and dental insurance',
      'Professional development budget',
      'Flexible work schedule',
      'Creative work environment',
      'Team building events'
    ],
    category: 'Marketing',
    remote: false,
    posted: '6 days ago',
    deadline: '2025-08-22'
  },
  {
    id: '8',
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
    deadline: '2025-08-05'
  },
  {
    id: '9',
    title: 'Customer Success Manager',
    company: 'Osmosis - AR',
    location: 'Chicago, IL',
    type: 'Full-time',
    level: 'Mid',
    salary: '$70,000 - $90,000',
    description:
      'Build strong relationships with our educational clients and ensure they achieve success with our platform. You will provide onboarding, training, and ongoing support to maximize customer satisfaction.',
    requirements: [
      '3+ years of customer success experience',
      'Experience in SaaS or EdTech industry',
      'Strong interpersonal skills',
      'Project management experience',
      "Bachelor's degree preferred"
    ],
    benefits: [
      'Base salary plus commission',
      'Comprehensive benefits',
      'Professional development',
      'Travel opportunities',
      'Collaborative team culture'
    ],
    category: 'Customer Success',
    remote: false,
    posted: '2 weeks ago',
    deadline: '2025-08-12'
  },
  {
    id: '10',
    title: 'QA Engineer',
    company: 'Osmosis - AR',
    location: 'Denver, CO',
    type: 'Contract',
    level: 'Mid',
    salary: '$80 - $100 per hour',
    description:
      'Ensure the quality and reliability of our educational platform through comprehensive testing strategies. You will develop automated tests and work closely with development teams.',
    requirements: [
      '3+ years of QA experience',
      'Experience with automated testing tools',
      'Knowledge of test management systems',
      'Strong attention to detail',
      'Experience with agile methodologies'
    ],
    benefits: [
      'Competitive hourly rate',
      'Flexible schedule',
      'Remote work options',
      'Professional development',
      'Potential for extension'
    ],
    category: 'Engineering',
    remote: true,
    posted: '1 week ago',
    deadline: '2025-08-28'
  }
]

export const otherJobs: Job[] = [
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
    deadline: '2025-08-20'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Osmosis - AR',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    salary: '$75,000 - $95,000',
    description:
      'Design intuitive and engaging user experiences for our educational platform. You will collaborate with product managers and developers to create designs that enhance learning outcomes.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Experience with user research and testing',
      'Strong portfolio demonstrating design process',
      'Knowledge of web accessibility standards'
    ],
    benefits: [
      'Remote-first culture',
      'Health and wellness stipend',
      'Professional development budget',
      'Flexible schedule',
      'Modern equipment provided'
    ],
    category: 'Design',
    remote: true,
    posted: '3 days ago',
    deadline: '2025-08-10'
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'Osmosis - AR',
    location: 'Austin, TX',
    type: 'Full-time',
    level: 'Mid',
    salary: '$100,000 - $130,000',
    description:
      'Help us build and maintain scalable infrastructure for our educational platform. You will work with containerization, CI/CD pipelines, and cloud services to ensure reliable and efficient deployment.',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with Docker and Kubernetes',
      'Knowledge of CI/CD tools (Jenkins, GitLab CI)',
      'Experience with cloud platforms (AWS preferred)',
      'Strong scripting skills (Python, Bash)'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive benefits package',
      'Remote work options',
      'Professional certifications supported',
      'Collaborative team environment'
    ],
    category: 'Engineering',
    remote: true,
    posted: '5 days ago',
    deadline: '2025-08-25'
  },
  {
    id: '5',
    title: 'Frontend Developer',
    company: 'Learning Labs Inc.',
    location: 'Seattle, WA',
    type: 'Full-time',
    level: 'Entry',
    salary: '$65,000 - $85,000',
    description:
      'Join our frontend team to create beautiful and responsive user interfaces for our educational platform using modern JavaScript frameworks.',
    requirements: [
      '2+ years of frontend development experience',
      'Strong knowledge of React and TypeScript',
      'Experience with CSS frameworks',
      'Understanding of responsive design',
      "Bachelor's degree preferred"
    ],
    benefits: [
      'Health and dental insurance',
      'Flexible work schedule',
      'Professional development opportunities',
      'Team lunch allowance',
      'Modern office space'
    ],
    category: 'Engineering',
    remote: false,
    posted: '1 week ago',
    deadline: '2025-08-30'
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'Analytics Education Corp.',
    location: 'Boston, MA',
    type: 'Full-time',
    level: 'Senior',
    salary: '$110,000 - $140,000',
    description:
      'Analyze educational data to derive insights that improve learning outcomes. You will work with large datasets and machine learning models to understand student behavior and optimize educational content.',
    requirements: [
      '4+ years of data science experience',
      'Strong knowledge of Python and R',
      'Experience with machine learning frameworks',
      'Knowledge of statistical analysis',
      'PhD in relevant field preferred'
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Comprehensive health benefits',
      'Research budget',
      'Conference attendance support',
      'Flexible work arrangements'
    ],
    category: 'Engineering',
    remote: true,
    posted: '2 days ago',
    deadline: '2025-08-15'
  }
]
