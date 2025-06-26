
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Login" subtitle="Login" />
    <LoginForm />
    <FooterOne />

    </>
  )
}
