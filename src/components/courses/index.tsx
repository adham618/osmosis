
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CoursesArea from './CoursesArea'

export default function Courses() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Course Style 1" subtitle="Course Style 1" />
      <CoursesArea />
      <FooterOne />
    </>
  )
}
