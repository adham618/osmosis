'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login submitted:', { username, password, rememberMe })
  }

  return (
    <section className="page-section main login-page">
      <div className="full-width-screen">
        <div className="container-fluid p-0">
          <div className="water-bg" id="water-js"></div>
          <div className="content-detail">
            <form className="login-form" method="post" onSubmit={handleSubmit}>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link className="back-btn" href="/">
                  Back to site
                </Link>
              </div>
              <div className="imgcontainer">
                <Image
                  src="/assets/img/logo-purp.png"
                  alt={siteConfig.short_name}
                  className="avatar logo-avatar-2"
                  width={180}
                  height={60}
                  priority
                />
              </div>
              <div className="input-control">
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span className="password-field-show">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="password-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </span>
                <label className="label-container">
                  Remember me
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="psw">
                  <Link href="/dashboard/forgot-password" className="forgot-btn">
                    Forgot password?
                  </Link>
                </span>
                <div className="login-btns">
                  <button type="submit">Login</button>
                </div>
                <div className="division-lines">
                  <p>Not a member?</p>
                </div>
                <div className="login-with-btns">
                  <span className="already-acc">
                    <Link href="/dashboard/signup" className="signup-btn">
                      Sign up
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
