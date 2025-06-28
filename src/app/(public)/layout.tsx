import ScrollToTop from '@/components/common/ScrollToTop'
import Layout from '@/layouts/layout'

export default function PubLicLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      {children}
      <ScrollToTop />
    </Layout>
  )
}
