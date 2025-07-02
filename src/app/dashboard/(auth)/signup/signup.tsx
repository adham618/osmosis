'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { PasswordInput } from '@/components/password-input'

export default function SignUp() {
  const router = useRouter()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateEduEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/dashboard/verification')

    return true
  }

  return (
    <section className="page-section main login-page">
      <div className="full-width-screen">
        <div className="container-fluid p-0">
          <div className="water-bg" id="water-js"></div>
          <div className="content-detail">
            {/* Signup form */}
            <form className="signup-form" method="post" onSubmit={validateEduEmail}>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link className="back-btn" href="/" style={{ color: 'rgb(60, 60, 60)' }}>
                  Back to site
                </Link>
              </div>
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
                <div className="row p-l-5 p-r-5">
                  <div className="col-md-6 p-l-10 p-r-10">
                    <input type="text" placeholder="Enter Username" name="uname" required />
                  </div>
                  <div className="col-md-6 p-l-10 p-r-10">
                    <input
                      type="email"
                      placeholder="Enter .edu Email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="col-md-6 p-l-10 p-r-10">
                    <PasswordInput
                      placeholder="Enter Password"
                      name="psw"
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6 p-l-10 p-r-10">
                    <PasswordInput
                      placeholder="Re-enter Password"
                      name="confirmPsw"
                      value={confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setConfirmPassword(e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <label className="label-container">
                  Remember me
                  <input type="checkbox" name="remember" />
                  <span className="checkmark"></span>
                </label>
                <div className="login-btns">
                  <button type="submit">Sign up</button>
                </div>
                <div className="division-lines">
                  <p>Current Members</p>
                </div>
                <div className="login-with-btns">
                  <span className="already-acc">
                    Already you have an account?{' '}
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
