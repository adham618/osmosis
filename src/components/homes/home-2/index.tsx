import AboutHomeOne from '../home/AboutHomeOne'
import BlogHomeOne from '../home/BlogHomeOne'
import CounterHomeOne from '../home/CounterHomeOne'
import CourseCategoryHomeOne from '../home/CourseCategoryHomeOne'
import FeatureHomeOne from '../home/FeatureHomeOne'
import InstructorsHomeOne from '../home/InstructorsHomeOne'
import ReviewHomeOne from '../home/ReviewHomeOne'
import WorkingProcessHomeOne from '../home/WorkingProcessHomeOne'

import BrandHomeTwo from './BrandHomeTwo'
import CoursesHomeTwo from './CoursesHomeTwo'
import CtaHomeTwo from './CtaHomeTwo'
import FaqHomeTwo from './FaqHomeTwo'
import HeroHomeTwo from './HeroHomeTwo'

export default function HomeTwo() {
  return (
    <>
      <HeroHomeTwo />
      <BrandHomeTwo />
      <FeatureHomeOne style_2={true} />
      <AboutHomeOne />
      <CounterHomeOne />
      <CoursesHomeTwo />
      <CourseCategoryHomeOne />
      <WorkingProcessHomeOne />
      <InstructorsHomeOne style_2={true} />
      <FaqHomeTwo />
      <ReviewHomeOne />
      <BlogHomeOne />
      <CtaHomeTwo />
    </>
  )
}
