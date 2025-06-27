import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EducatorFeaturesCta() {
  return (
    <section className="cta mx-auto" style={{ marginTop: '5%' }}>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-8 mx-auto" data-aos="fade-in">
            <div className="cta-item">
              <div className="cta-content">
                <h3>
                  For <span>Teachers</span>
                </h3>
                <p>
                  Getting started with Osmosis is a breeze! Let&apos;s work together to revitalize
                  the world of education!
                </p>
                <Link href="/educator-pricing" className="bg_btn bt">
                  Let&apos;s Get Started!
                </Link>
              </div>
              <Image
                src="/assets/img/for-educators/teacher.png"
                alt="cta"
                className="cta_img"
                width={177}
                height={241}
              />
              <div className="cta_shape">
                <svg fill="none" viewBox="0 0 164 176">
                  <circle cx="89" cy="88" r="74" fill="#fff" />
                  <mask
                    id="a"
                    width="178"
                    height="178"
                    x="0"
                    y="0"
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#fff" d="M0 0h178v178H0z" />
                    <path d="M177 89c0 48.601-39.399 88-88 88S1 137.601 1 89 40.399 1 89 1s88 39.399 88 88zM26.996 89c0 34.244 27.76 62.004 62.004 62.004s62.004-27.76 62.004-62.004S123.244 26.996 89 26.996 26.996 54.756 26.996 89z" />
                  </mask>
                  <path
                    stroke="#0F2B5A"
                    strokeDasharray="7 7"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M177 89c0 48.601-39.399 88-88 88S1 137.601 1 89 40.399 1 89 1s88 39.399 88 88zM26.996 89c0 34.244 27.76 62.004 62.004 62.004s62.004-27.76 62.004-62.004S123.244 26.996 89 26.996 26.996 54.756 26.996 89z"
                    mask="url(#a)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
