

import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CartArea from './CartArea'

export default function Cart() {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Cart" subtitle="Cart" />
    <CartArea />
    <FooterOne />

    </>
  )
}
