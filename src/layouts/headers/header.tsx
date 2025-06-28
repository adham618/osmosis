'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import MobileMenu from './MobileMenu'
import NavMenu from './NavMenu'

import { siteConfig } from '@/config/site'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header id="navigation" className="header-2">
      <div className="container">
        <div className="row d-flex flex-nowrap justify-content-between">
          {/* Logo Section */}
          <div
            className="col-auto p-0"
            style={{
              maxWidth: '34%'
            }}
          >
            <div className="site-logo">
              <Link href="/">
                <Image
                  className="h-auto"
                  src="/assets/img/logo-purp.png"
                  alt={siteConfig.short_name}
                  width={180}
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="col-xl-7 col-lg-7 col-md-7 col-6 menu_col justify-content-center d-flex align-self-center flex-grow">
            <nav id="main-menu">
              <NavMenu />
            </nav>
          </div>

          {/* Call to Action Button */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-auto align-self-center text-end pe-5 pe-sm-0 flex-shrink-0">
            <Link href="/dashboard/login" className="bg_btn call-action-button bt">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu Toggle */}
      <button
        id="sm_menu_ham"
        className={openMenu ? 'open' : ''}
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Toggle mobile menu"
        aria-expanded={openMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Mobile Menu Component */}
      {openMenu && <MobileMenu opneMenu={openMenu} />}
    </header>
  )
}
