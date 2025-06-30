'use client'

import { AuthBg } from './auth-bg'

import { secondaryFont } from '@/config/fonts'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`position-relative overflow-hidden w-100 h-100 ${secondaryFont.className}`}>
      <AuthBg>{children}</AuthBg>
    </main>
  )
}
