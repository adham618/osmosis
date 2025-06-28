'use client'

import { AuthBg } from './auth-bg'

import { secondaryFont } from '@/config/fonts'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`position-relative w-100 bg-black bg-opacity-50 overflow-hidden h-100 ${secondaryFont.className}`}
    >
      <AuthBg>{children}</AuthBg>
    </main>
  )
}
