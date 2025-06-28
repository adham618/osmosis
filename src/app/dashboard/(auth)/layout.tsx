import Image from 'next/image'

import { secondaryFont } from '@/config/fonts'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`position-relative w-100 bg-black bg-opacity-50 overflow-hidden h-100 ${secondaryFont.className}`}
    >
      <Image
        src="/assets/img/background-1.jpg"
        alt="background"
        fill
        className="object-fit-cover z-n1"
        priority
      />
      {children}
    </main>
  )
}
