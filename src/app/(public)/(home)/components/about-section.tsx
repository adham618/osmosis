import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      <section className="about" style={{ marginBottom: '5%' }}>
        <div className="container" style={{ paddingTop: '20px' }}>
          <div className="row gap-5 justify-content-between">
            <div className="col-lg-6 aboutvideo align-self-center wow fadeIn" data-aos="fade-in">
              <video autoPlay loop muted playsInline>
                <source src="assets/img/biochem.mp4" type="video/mp4" />
              </video>
            </div>

            <div
              className="col-lg-5 align-self-center align-items-center wow fadeIn"
              data-aos="fade-in"
            >
              <div className="section-title about-title">
                <span>One platform, unlimited possibilities</span>
                <h2>The Future of Education</h2>
              </div>

              <p className="mb50">
                Osmosis offers a platform where instructors, educators, and developers can
                collaborate and create and share unforgettable learning experiences in the realm of
                virtual or augmented reality. Whatever students want to learn, and whatever
                educators want to teach, Osmosis is the place to bring it to life.
              </p>

              <Link href="/about" className="bg_btn bt">
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
                <span>Learning through living</span>
                <h2>Revolutionizing how you absorb knowledge</h2>
              </div>

              <p className="mb50">
                Osmosis gets students as close as possible to learning through experience, for any
                subject regardless of complexity. No more are the days where the learning experience
                is confined to the classroom.
              </p>

              <Link href="/courses" className="bg_btn bt">
                Explore Courses
              </Link>
            </div>
            <div className="col-lg-6 aboutvideo align-self-center wow fadeIn" data-aos="fade-in">
              <video autoPlay loop muted playsInline>
                <source src="assets/img/dinosaur.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
