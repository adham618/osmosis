
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CourseDetailsArea from './CourseDetailsArea'

export default function CourseDetails() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Course Details" subtitle="Course Details" />
      <CourseDetailsArea />
      <FooterOne />
    </>
  )
}
