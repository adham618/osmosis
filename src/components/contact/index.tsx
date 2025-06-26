
import FooterOne from '@/layouts/footer'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import ContactForm from './ContactForm'
import GoogleMap from './GoogleMap'

export default function Contact() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactForm />
      <GoogleMap />
      <FooterOne />
    </>
  )
}
