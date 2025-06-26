
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CheckoutArea from './CheckoutArea'

export default function Checkout() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Checkout" subtitle="Checkout" />
      <CheckoutArea />
      <FooterOne />
    </>
  )
}
