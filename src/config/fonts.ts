import { Montserrat, Urbanist } from 'next/font/google'

export const primaryFont = Urbanist({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const secondaryFont = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})
