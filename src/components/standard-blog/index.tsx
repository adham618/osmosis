

import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import StandardBlogArea from './StandardBlogArea'

export default function StandardBlog() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Standard Blog" subtitle="Standard Blog" />
      <StandardBlogArea />
      <FooterOne />
    </>
  )
}
