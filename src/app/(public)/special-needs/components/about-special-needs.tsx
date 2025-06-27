import Image from 'next/image'
import Link from 'next/link'

export default function SpecialNeedsK12() {
  return (
    <>
      <section className="about" style={{ marginBottom: '5%' }}>
        <div className="container" style={{ paddingTop: '60px' }}>
          <div className="row gap-5 justify-content-between">
            <div className="col-lg-6 aboutvideo align-self-center wow fadeIn">
              <Image
                className="w-100 h-auto"
                src="/assets/img/special-needs/classroom.png"
                alt="about"
                width={696}
                height={625}
              />
            </div>

            <div className="col-lg-5 align-self-center align-items-center wow fadeIn">
              <div className="section-title about-title">
                <span>Unlocking Potential</span>
                <h2>Empowering Students with Special Needs</h2>
              </div>

              <p className="mb50">
                AR opens the door to many new possibilities within the field of special education,
                not only for professionals, but also for parents and caregivers. All Osmosis courses
                are designed with accessibility in mind, and many are tailored to the needs of
                students with visual, hearing, or motor impairments.
              </p>

              <div className="single_about">
                <div className="aicon">
                  <svg fill="none" viewBox="0 0 45 45">
                    <defs>
                      <linearGradient id="purpleGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8A2BE2" />
                        <stop offset="100%" stopColor="#DA70D6" />
                      </linearGradient>
                    </defs>
                    <g fill="url(#purpleGradient3)">
                      <path d="M22.5 0C10.074 0 0 10.074 0 22.5S10.074 45 22.5 45 45 34.926 45 22.5 34.926 0 22.5 0zm0 6.75c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm12.375 27.375h-24.75c-.621 0-1.125-.504-1.125-1.125 0-6.213 5.037-11.25 11.25-11.25h4.5c6.213 0 11.25 5.037 11.25 11.25 0 .621-.504 1.125-1.125 1.125z" />
                    </g>
                  </svg>
                </div>

                <div className="sbcontent">
                  <h4>Specialized Inputs</h4>
                  <p>
                    While most VR courses are already designed to support multiple accessories on
                    the mainstream market, Osmosis takes accessibility a step further by offering
                    suport a wide range of specialized input and output devices, ensuring all
                    students can experience our courses to the fullest extent possible.
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
                      <path d="M41.25 17.813h-2.027a16.52 16.52 0 00-1.055-2.548l1.44-1.44a3.75 3.75 0 000-5.303l-2.12-2.12a3.75 3.75 0 00-5.303 0l-1.44 1.44a16.52 16.52 0 00-2.548-1.055V4.76A3.75 3.75 0 0024.447 1h-3A3.75 3.75 0 0017.7 4.76v2.027a16.52 16.52 0 00-2.548 1.055l-1.44-1.44a3.75 3.75 0 00-5.303 0l-2.12 2.12a3.75 3.75 0 000 5.303l1.44 1.44a16.52 16.52 0 00-1.055 2.548H4.647A3.75 3.75 0 00.897 21.563v3a3.75 3.75 0 003.75 3.75h2.027a16.52 16.52 0 001.055 2.548l-1.44 1.44a3.75 3.75 0 000 5.303l2.12 2.12a3.75 3.75 0 005.303 0l1.44-1.44a16.52 16.52 0 002.548 1.055v2.027a3.75 3.75 0 003.75 3.75h3a3.75 3.75 0 003.75-3.75v-2.027a16.52 16.52 0 002.548-1.055l1.44 1.44a3.75 3.75 0 005.303 0l2.12-2.12a3.75 3.75 0 000-5.303l-1.44-1.44a16.52 16.52 0 001.055-2.548h2.027a3.75 3.75 0 003.75-3.75v-3a3.75 3.75 0 00-3.75-3.75zM22.947 30a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
                    </g>
                  </svg>
                </div>

                <div className="sbcontent">
                  <h4>Tailored Courses</h4>
                  <p>
                    From Sign Language support to Physical Therapy Aid courses, Osmosis provides
                    tools, features, and resources specifically tailored to the needs of students
                    with special needs.
                  </p>
                </div>
              </div>

              <Link href="/dashboard/login" className="bg_btn bt">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about" style={{ marginTop: '5%', marginBottom: '5%' }}>
        <div className="container">
          <div className="row gap-5 justify-content-between">
            <div className="col-lg-5 align-self-center align-items-center wow fadeIn">
              <div className="section-title about-title">
                <span>For aids, parents, and caretakers</span>
                <h2>Learning with your child</h2>
              </div>

              <p className="mb50">
                There&apos;s no reason why the fun of AR learning should be limited to kids and
                teens - Osmosis is currently developing <b>Guardian</b>, a new feature which will
                enable parents and caretakers to learn alongside their children, both in the same
                room and in remote locations.
              </p>

              <Link href="/dashboard/login" className="bg_btn bt">
                More on Guardian
              </Link>
            </div>
            <div className="col-lg-6 aboutvideo align-self-center wow fadeIn">
              <Image
                className="w-100 h-auto"
                src="/assets/img/special-needs/girl.png"
                alt="about"
                width={481}
                height={432}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
