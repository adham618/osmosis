

import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import AboutHomeOne from './AboutHomeOne'
import BlogHomeOne from './BlogHomeOne'
import BrandHomeOne from './BrandHomeOne'
import CounterHomeOne from './CounterHomeOne'
import CourseCategoryHomeOne from './CourseCategoryHomeOne'
import CoursesHomeOne from './CoursesHomeOne'
import FeatureHomeOne from './FeatureHomeOne'
import HeroHomeOne from './HeroHomeOne'
import InstructorsHomeOne from './InstructorsHomeOne'
import ReviewHomeOne from './ReviewHomeOne'
import VideoHomeOne from './VideoHomeOne'
import WorkingProcessHomeOne from './WorkingProcessHomeOne'

export default function HomeOne() {
  return (
    <>
      <HeaderOne />
      <HeroHomeOne />
      <FeatureHomeOne />
      <AboutHomeOne />
      <CounterHomeOne />
      <CoursesHomeOne />
      <CourseCategoryHomeOne />
      <WorkingProcessHomeOne />
      <InstructorsHomeOne />
      <VideoHomeOne />
      <ReviewHomeOne />
      <BrandHomeOne />
      <BlogHomeOne />
      <FooterOne />
    </>
  )
}
