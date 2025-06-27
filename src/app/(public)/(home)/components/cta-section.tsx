import Image from 'next/image'
import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="cta">
      <div className="container">
        <div className="row d-flex flex-wrap">
          <div className="col-xl-6 col-lg-6 col-12 wow fadeIn d-flex flex-column">
            <div className="cta-item flex-fill">
              <div className="cta-content d-flex flex-column">
                <h3>
                  For <span>Educators</span>
                </h3>
                <p>
                  We offer comprehensive software solutions to make classroom AR/VR integration as
                  easy as possible, offering training and support every step of the way.
                </p>
                <div className="mt-auto">
                  <Link href="/educator-features" className="bg_btn bt">
                    Work With Us
                  </Link>
                </div>
              </div>
              <Image
                src="/assets/img/cta/instructor.jpg"
                className="cta_img"
                alt="cta"
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

          <div className="col-xl-6 col-lg-6 col-12 wow fadeIn d-flex flex-column">
            <div className="cta-item flex-fill">
              <div className="cta-content d-flex flex-column">
                <h3>
                  For <span>Students</span>
                </h3>
                <p>
                  Offering a wide variety of courses in varying formats, from school-run, to
                  instructor-based, to fully independent.
                </p>
                <div className="mt-auto">
                  <Link href="/k12" className="bg_btn bt">
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/assets/img/cta/classroom.jpg"
                className="cta_img"
                alt="cta"
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
