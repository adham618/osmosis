'use client'

import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--purple-main)',
          '--normal-text': '#fff',
          '--normal-border': 'var(--purple-main)'
        } as React.CSSProperties
      }
      position="top-center"
      {...props}
    />
  )
}

export { Toaster }
