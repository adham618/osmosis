import { Metadata } from 'next'

import CoursesArea from './courses-area'

import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    "Get Started, Explore Courses, What do you want to learn? Explore Most Popular Courses, View All, K-12, Anatomy, Physiology, and Kinesiology, Introduction to Robotics and Electrical Engineering, Oceans and Marine Biology, Introduction to Chemistry, Exploring the Stars: Astronomy and Introductory Astrophysics, Ancient Cultures: The Study of Human Civilization, An Introduction to Conservation Biology, CJUS 301: Introduction to Forensic Science, Introduction to Geology: Reading the Earth's Story, PHYS 101: Introduction to Physics and Mechanics"
}

export default function CoursesPage() {
  return (
    <main>
      <Breadcrumb
        title="Explore Courses"
        subtitle="What do you want to learn?"
        img="/assets/img/bg/banner1.png"
      />
      <CoursesArea />
    </main>
  )
}
