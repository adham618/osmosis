
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CoursesTwoArea from './CoursesTwoArea'

export default function CoursesTwo() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Course Style 2" subtitle="Course Style 2" />
      <CoursesTwoArea />
      <FooterOne />
    </>
  )
}
