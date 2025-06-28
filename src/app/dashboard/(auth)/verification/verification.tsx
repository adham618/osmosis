'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Verification() {
  const router = useRouter()

  const handleVerifiedClick = () => {
    router.push('/')
  }

  return (
    <section className="page-section main login-page">
      <div className="full-width-screen">
        <div className="container-fluid p-0">
          <div className="water-bg" id="water-js"></div>
          <div className="content-detail">
            <form className="forgot-form" method="post">
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
                <p>
                  Please wait while we verify your email. You should receive an email and your
                  dashboard link once we&apos;re able to confirm your account.
                </p>
                <div className="login-btns">
                  <button type="button" onClick={handleVerifiedClick}>
                    I&apos;m verified!
                  </button>
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
