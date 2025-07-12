'use client'

import AOSInit from '@/app/aos-init'
import { Toaster } from '@/components/ui/sonner'

export default function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AOSInit />
      {children}
      <Toaster />
    </>
  )
}
