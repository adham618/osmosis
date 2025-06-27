import Link from 'next/link'

export default function EducatorFeaturesAbout() {
  return (
    <section className="about" style={{ marginBottom: '5%' }}>
      <div className="container" style={{ paddingTop: '60px' }}>
        <div className="row gap-5 justify-content-between">
          <div className="col-lg-6 aboutvideo align-self-center wow fadeIn" data-aos="fade-in">
            <video autoPlay loop muted playsInline>
              <source src="assets/img/for-educators/vr-biochem.mp4" type="video/mp4" />
            </video>
          </div>

          <div
            className="col-lg-5 align-self-center align-items-center wow fadeIn"
            data-aos="fade-in"
          >
            <div className="section-title about-title">
              <span>A Global Phenomenon</span>
              <h2>Making Memories in Classrooms Worldwide</h2>
            </div>

            <p className="mb50">
              Teachers in <b>15</b> different countries have integrated Osmosis into their
              curriculums and teaching methodology. Therefore, we currently offer courses in 6
              different languages, and offer pre-made settings tailoring course length and scope to
              varying international standards and curricula.
            </p>

            <Link href="/courses" className="bg_btn bt">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
