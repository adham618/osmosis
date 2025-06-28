'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const validateEduEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string

    // Check if email ends with .edu
    if (!email.endsWith('.edu')) {
      setEmailError(true)

      return false
    }

    setEmailError(false)
    // Add your signup logic here
    console.log('Signup form submitted')

    return true
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
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
                  src="/assets/img/logo-purp.svg"
                  alt="Logo"
                  className="avatar logo-avatar"
                  width={100}
                  height={50}
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
                    <span
                      id="email-error"
                      style={{
                        color: 'red',
                        fontSize: '12px',
                        display: emailError ? 'block' : 'none'
                      }}
                    >
                      Please enter a valid .edu email address
                    </span>
                  </div>
                  <div className="col-md-6 p-l-10 p-r-10">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      className="input-checkmark"
                      required
                    />
                  </div>
                  <div className="col-md-6 p-l-10 p-r-10">
                    <span className="password-field-show">
                      <input
                        className="password-field input-checkmark"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Re-enter Password"
                        name="confirmPsw"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className={`fa fa-fw ${showPassword ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password`}
                        style={{
                          cursor: 'pointer',
                          background: 'none',
                          border: 'none',
                          padding: '0'
                        }}
                      />
                    </span>
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
