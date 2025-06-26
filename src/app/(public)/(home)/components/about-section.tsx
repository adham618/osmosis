export default function AboutSection() {
  return (
    <section className="about" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 align-self-center align-items-center wow fadeIn"
            style={{ marginRight: "40px", marginLeft: "7%" }}
          >
            <div className="section-title about-title">
              <span>Learning through living</span>
              <h2>Revolutionizing how you absorb knowledge</h2>
            </div>

            <p className="mb50">
              Osmosis gets students as close as possible to learning through
              experience, for any subject regardless of complexity. No more are
              the days where the learning experience is confined to the
              classroom.
            </p>

            <a href="#" className="bg_btn bt">
              Explore Courses
            </a>
          </div>
          <div className="col-xl-6 aboutvideo mt-3 mt-lg-0 col-lg-6 align-self-center wow fadeIn">
            <video autoPlay loop muted playsInline>
              <source src="assets/img/dinosaur.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
