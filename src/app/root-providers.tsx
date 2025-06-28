'use client'

import AOSInit from '@/app/aos-init'

export default function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AOSInit />
      {children}
    </>
  )
}
