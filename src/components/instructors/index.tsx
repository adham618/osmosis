
import Breadcrumb from '../common/Breadcrumb'
import InstructorsHomeOne from '../homes/home/InstructorsHomeOne'

export default function Instructors() {
  return (
    <>
      <Breadcrumb title="Instructors" subtitle="Instructors" />
      <InstructorsHomeOne />
      <InstructorsHomeOne style_2={true} style_3={true} />
    </>
  )
}
