import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SendEmail() {
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
                  If an account under this email exists, you should receive an email with a link to
                  reset your password.
                </p>
                <br />
                <div className="login-with-btns" style={{ marginTop: '20px' }}>
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
