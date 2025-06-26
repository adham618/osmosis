
import Breadcrumb from '../common/Breadcrumb'
import AboutHomeOne from '../homes/home/AboutHomeOne'
import CounterHomeOne from '../homes/home/CounterHomeOne'
import FeatureHomeOne from '../homes/home/FeatureHomeOne'
import InstructorsHomeOne from '../homes/home/InstructorsHomeOne'

export default function About() {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" />
      <FeatureHomeOne />
      <AboutHomeOne />
      <CounterHomeOne />
      <InstructorsHomeOne style_2={true} />
    </>
  )
}
