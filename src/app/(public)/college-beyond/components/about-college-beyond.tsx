import Link from 'next/link'

export default function CollegeBeyondK12() {
  return (
    <>
      <section className="about" style={{ marginBottom: '5%' }}>
        <div className="container" style={{ paddingTop: '60px' }}>
          <div className="row gap-5 justify-content-between">
            <div className="col-lg-6 aboutvideo align-self-center wow fadeIn" data-aos="fade-in">
              <video autoPlay loop muted playsInline>
                <source src="assets/img/college-beyond/vr-exp.mp4" type="video/mp4" />
              </video>
            </div>

            <div
              className="col-lg-5 align-self-center align-items-center wow fadeIn"
              data-aos="fade-in"
            >
              <div className="section-title about-title">
                <span>Simulations and Modelling</span>
                <h2>A new way to visualize anything</h2>
              </div>

              <p className="mb50">
                From surgery to space travel, Osmosis enables students to run simulations, model
                complex systems, and learn collaboratively like never before.
              </p>

              <div className="single_about">
                <div className="aicon">
                  <svg fill="none" viewBox="0 0 45 45">
                    <defs>
                      <linearGradient id="purpleGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8A2BE2" />
                        <stop offset="100%" stopColor="#DA70D6" />
                      </linearGradient>
                    </defs>
                    <g fill="url(#purpleGradient1)">
                      <path d="M42 12L22.5 4 3 12l19.5 8 19.5-8zM22.5 23L9 17v7c0 4 6 7.5 13.5 7.5S36 28 36 24v-7L22.5 23z" />
                      <path d="M31 15v6c0 2-3.8 3.5-8.5 3.5S14 23 14 21v-6" />
                      <path d="M28 32h8v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4z" />
                    </g>
                  </svg>
                </div>

                <div className="sbcontent">
                  <h4>Advanced Courses</h4>
                  <p>
                    Osmosis offers multiple advanced courses that accompany and reinforce common
                    introductory courses in both undergraduate and graduate programs.
                  </p>
                </div>
              </div>

              <div className="single_about">
                <div className="aicon">
                  <svg fill="none" viewBox="0 0 45 45">
                    <defs>
                      <linearGradient id="purpleGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8A2BE2" />
                        <stop offset="100%" stopColor="#DA70D6" />
                      </linearGradient>
                    </defs>
                    <g fill="url(#purpleGradient4)">
                      <path d="M35 40H10c-2.2 0-4-1.8-4-4c0-1 0.4-2 1.2-2.8l11.3-12.5V10h-2c-0.6 0-1-0.4-1-1s0.4-1 1-1h12c0.6 0 1 0.4 1 1s-0.4 1-1 1h-2v10.7l11.3 12.5c0.8 0.8 1.2 1.8 1.2 2.8C39 38.2 37.2 40 35 40zM22 20.7V10h1v10.7L22 20.7z" />
                      <path d="M26 8h-7c-0.6 0-1-0.4-1-1s0.4-1 1-1h7c0.6 0 1 0.4 1 1S26.6 8 26 8z" />
                    </g>
                  </svg>
                </div>

                <div className="sbcontent">
                  <h4>Labs</h4>
                  <p>
                    Osmosis Labs are hands-on, immersive environments where students can explore and
                    experiment with real-world systems and technologies with minimal cost and risk.
                  </p>
                </div>
              </div>

              <Link href="/dashboard/login" className="bg_btn bt">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about" style={{ marginTop: '5%', marginBottom: '5%' }}>
        <div className="container">
          <div className="row gap-5 justify-content-between">
            <div
              className="col-lg-5 align-self-center align-items-center wow fadeIn"
              data-aos="fade-in"
            >
              <div className="section-title about-title">
                <span>The Future University</span>
                <h2>How AR and VR are reshaping college courses</h2>
              </div>

              <p className="mb50">
                <b>18%</b> of colleges and universities in the United States have fully integrated
                VR (Virtual Reality), AR (Augmented Reality), and MR (Mixed Reality) into some
                courses, and <b>28%</b> have partially integrated these new modes of learning.
                Osmosis strives to be at the forefront of this new wave of education.
              </p>

              <Link
                href="https://link.springer.com/article/10.1007/s11528-025-01092-y"
                target="_blank"
                rel="noopener noreferrer"
                className="bg_btn bt"
              >
                Read More
              </Link>
            </div>
            <div className="col-lg-6 aboutvideo align-self-center wow fadeIn" data-aos="fade-in">
              <video autoPlay loop muted playsInline>
                <source src="assets/img/college-beyond/vr-guy.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
