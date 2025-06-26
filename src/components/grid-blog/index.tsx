
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import GridBlogArea from './GridBlogArea'

export default function GridBlog() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Grid Blog" subtitle="Grid Blog" />
      <GridBlogArea />
      <FooterOne />
    </>
  )
}
