'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPassword() {
  const handleResetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add your reset password logic here
    console.log('Reset password form submitted')
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
                  width={100}
                  height={50}
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
                    <Link href="/login" className="login-btn">
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
