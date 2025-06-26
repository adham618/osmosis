
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import RegisterForm from './RegisterForm'

export default function Register() {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Register" subtitle="Register" />
    <RegisterForm />
    <FooterOne />

    </>
  )
}
