'use client'

import dynamic from 'next/dynamic'

const WaterWave = dynamic(() => import('react-water-wave'), { ssr: false }) as any

export function AuthBg({ children }: { children: React.ReactNode }) {
  return (
    <WaterWave
      imageUrl="/assets/img/background-1.jpg"
      dropRadius={25}
      perturbance={0.04}
      resolution={512}
      interactive={true}
      crossOrigin="anonymous"
      style={{
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {() => (
        <>
          <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50 z-0"></div>
          <div className="position-relative z-10 w-100 h-100">{children}</div>
        </>
      )}
    </WaterWave>
  )
}
