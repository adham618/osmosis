import Image from 'next/image'
import Link from 'next/link'

export default function CollegeBeyondBanner() {
  return (
    <section className="home-banner hbstyle-2 position-relative w-100 overflow-hidden">
      <Image
        src="/assets/img/college-beyond/two-young-women-in-vr-glasses-doing-experiments-in-2025-02-19-20-57-44-utc.jpg"
        alt="background"
        fill
        className="object-fit-cover z-n1"
        priority
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="banner-content d-flex align-items-center">
              <div className="banner-content-inner">
                <div style={{ maxWidth: '70%' }}>
                  <h1 className="title">
                    <span>Augmenting</span> Higher Education
                  </h1>
                  <p>
                    AR unlocks new possibilities in undergraduate and graduate education,
                    particularly in science, technology, and medicine.
                  </p>
                </div>
                <div className="bcate">
                  <Link href="/k12">K-12</Link> , <Link href="/special-needs">Special Needs</Link> ,{' '}
                  <Link href="/college-beyond">College & Beyond</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner_img">
          <div className="banner_img_inner">
            <video autoPlay loop muted playsInline>
              <source src="assets/img/college-beyond/vr-couple.mp4" type="video/mp4" />
            </video>
            <div className="sinfo">
              <Image src="/assets/img/placeholder.png" alt="image" width={165} height={94} />
            </div>
          </div>
        </div>

        <div className="circle_shape eitem" data-value="1"></div>
        <div className="tpshape">
          <svg fill="none" viewBox="0 0 147 297">
            <path
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity=".05"
              strokeWidth="7"
              d="M83.755-55.798c33.904 36.979 10.442 93.21 19.058 142.218 9.073 51.606 59.065 103.667 31.95 147.908-27.292 44.529-94.427 31.803-146.613 39.177-53.094 7.503-112.908 37.432-155.043 3.451-41.916-33.803-18.758-98.921-28.438-151.421-10.342-56.091-57.129-112.778-29.34-161.951 28.69-50.767 97.899-59.728 156.706-63.423 54.33-3.414 114.657 3.619 151.72 44.041z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="btmshape">
          <svg fill="none" viewBox="0 0 236 409">
            <path
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity=".11"
              strokeWidth="2"
              d="M-89.755 52.094c37.15-14.894 77.387 2.568 112.843 19.565 34.705 16.637 69.624 37.842 81.693 73.691 11.968 35.549-6.127 72.04-20.797 107.193-16.373 39.233-26.341 88.982-67.167 103.584-40.895 14.626-80.23-17.547-117.945-37.376-34.682-18.235-76.17-33.695-87.396-70.589-11.017-36.203 16.557-70.85 33.888-105.254 17.307-34.357 28.555-76.251 64.881-90.814z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity=".11"
              strokeWidth="2"
              d="M-55.387 52.63C-19.19 39.093 19.54 57.897 53.646 76.07c33.383 17.787 66.909 40.134 78.094 76.268 11.091 35.832-6.952 71.55-21.66 106.056-16.414 38.509-26.772 87.72-66.526 100.837-39.82 13.14-77.47-20.287-113.723-41.36-33.338-19.38-73.309-36.232-83.663-73.378-10.16-36.45 17.039-70 34.313-103.666 17.251-33.62 28.738-74.961 64.132-88.197z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity=".11"
              strokeWidth="2"
              d="M-21.667 51.68c36.473-12.776 74.8 6.834 108.518 25.718 33.003 18.482 66.054 41.526 76.48 77.886 10.338 36.057-8.449 71.39-23.876 105.58-17.217 38.157-28.604 87.139-68.623 99.421C30.745 372.588-6.196 338.381-42 316.553c-32.925-20.073-72.534-37.759-82.108-75.114-9.395-36.654 18.501-69.627 36.477-102.925 17.95-33.251 30.3-74.342 65.964-86.834z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity=".11"
              strokeWidth="2"
              d="M-4.929 45.706C31.293 32.23 70.173 51.77 104.418 70.625c33.518 18.454 67.198 41.561 78.54 78.527 11.247 36.657-6.7 72.929-21.309 107.995-16.305 39.134-26.502 89.242-66.289 102.256-39.855 13.038-77.706-21.411-114.113-43.244-33.48-20.078-73.596-37.639-84.11-75.63-10.317-37.278 16.813-71.254 33.998-105.44C-51.704 100.95-40.347 58.882-4.93 45.706z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="bwavehape">
          <svg fill="none" viewBox="0 0 1497 333">
            <path
              stroke="url(#paint0_linear_3203_231)"
              strokeOpacity=".05"
              strokeWidth="20"
              d="M5 108.243l40.92-22.41C88.08 63.42 169.92 18.598 253 11.127c83.08-7.47 164.92 22.411 248 82.174 83.08 59.764 164.92 149.408 248 194.231 83.08 44.822 164.92 44.822 248 7.47 83.08-37.352 164.92-112.056 248-134.467 83.08-22.411 164.92 7.47 207.08 22.411l40.92 14.941"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3203_231"
                x1="749"
                x2="749"
                y1="10"
                y2="422"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".182" stopColor="#8A2BE2" />
                <stop offset=".844" stopColor="#fff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
