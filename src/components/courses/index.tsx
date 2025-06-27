import Breadcrumb from '../common/Breadcrumb'
import CoursesArea from '../../app/(public)/courses/courses-area'

export default function Courses() {
  return (
    <>
      <Breadcrumb title="Explore Courses" subtitle="What do you want to learn?" />
      <CoursesArea />
    </>
  )
}
