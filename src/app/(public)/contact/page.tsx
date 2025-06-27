import type { Metadata } from 'next'

import Contact from '@/components/contact'
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Home For Students, For Educators, Opportunities, Get Started, Contact Us. Write email Us: admin@example.com, support@example.com. Visit anytime: 101 North First Ave, Phoenix, AZ. Send us email: Feel Free to write. Enter Name, Enter Email, Enter Subject, Enter Phone, Enter Message. Useful Links: Home, Courses, Pricing, Contact Us. contact@osmosis-ar.com, 101 N 1st Ave Suite 2325, Phoenix AZ 85003 USA. Copyright © 2025 Osmosis. All rights reserved.'
}

export default function ContactPage() {
  return <Contact />
}
