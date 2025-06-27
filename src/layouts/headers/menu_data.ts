interface DataType {
  id: number
  title: string
  link: string
  has_dropdown?: boolean
  sub_menus?: {
    link: string
    title: string
  }[]
}

// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    has_dropdown: false
  },
  {
    id: 2,
    title: 'For Students',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { link: '/k12', title: 'K-12' },
      { link: '/special-needs', title: 'Special Needs' },
      { link: '/college-beyond', title: 'College & Beyond' },
      { link: '/courses-1', title: 'Explore Courses' }
    ]
  },
  {
    id: 3,
    title: 'For Educators',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { link: '/educator-features', title: 'For Instructors' },
      { link: '/educator-pricing', title: 'Pricing' }
    ]
  },
  {
    id: 4,
    title: 'Opportunities',
    link: '#',
    has_dropdown: false
  }
]

export default menu_data
