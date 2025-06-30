'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ForgotPassword() {
  const router = useRouter()
  const handleResetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/dashboard/send-email')
  }

  return (
    <section className="page-section main login-page">
      <div className="full-width-screen">
        <div className="container-fluid p-0">
          <div className="water-bg" id="water-js"></div>
          <div className="content-detail">
            <form className="forgot-form" method="post" onSubmit={handleResetSubmit}>
              <div className="imgcontainer">
                <Image
                  src="/assets/img/logo-purp.png"
                  alt="Logo"
                  className="avatar logo-avatar-2"
                  width={180}
                  height={60}
                  priority
                />
              </div>
              <div className="input-control">
                <p>Enter your email, we will send a link to reset your password.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="reset-email"
                  required
                />
                <div className="login-btns">
                  <button type="submit">Reset</button>
                </div>
                <div className="login-with-btns">
                  <span className="already-acc">
                    Return to{' '}
                    <Link href="/dashboard/login" className="login-btn">
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
