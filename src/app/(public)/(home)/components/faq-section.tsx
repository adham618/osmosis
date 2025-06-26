export default function FaqSection() {
  return (
  		<section className="faq pb120">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 wow fadeIn">
						<div className="faq-image">
							<img src="assets/img/vr-gog.png" alt="faq"/>
						</div>
					</div>

					<div className="col-xl-6 align-self-center wow fadeIn">
						<div className="section-title">
							<span>FAQ</span>
							<h2>Frequently Asked <br/> Questions</h2>
						</div>

						<div className="accordion" id="faq_accordion">
							<div className="accordion-item">
								<h2 className="accordion-header" id="heading1">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
										What is Osmosis, exactly?
									</button>
								</h2>

								<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faq_accordion">
									<div className="accordion-body">
										Osmosis is an online education platform, much like many others, where instructors can create courses teaching a wide range of subjects, from ancient history to biochemistry.
										The key difference that sets us apart from other platforms is that every course in Osmosis is designed to be an interactive experience in the realm of virtual
										or augmented reality.
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h2 className="accordion-header" id="heading2">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
										Who can teach through Osmosis?
									</button>
								</h2>

								<div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faq_accordion">
									<div className="accordion-body">
										Any instructor in a K-12 school, college, or university can use Osmosis to host courses or bring their classroom
										into virtual reality. An .edu email can be used to quickly verify your account and get you started, however, it is not required.
									</div>
								</div>
							</div>


							<div className="accordion-item">
								<h2 className="accordion-header" id="heading3">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
										Who can learn through Osmosis?
									</button>
								</h2>

								<div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faq_accordion">
									<div className="accordion-body">
										We all already learn things through osmosis on a daily basis, but unfortunately, a lot of the most captivating subjects are confined to textbooks and documentaries. Or they were - until now.
										Any student with a desire to learn in a new and immersive way can do so through Osmosis.
									</div>
								</div>
							</div>


							<div className="accordion-item">
								<h2 className="accordion-header" id="heading4">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
										Who can create courses through Osmosis?
									</button>
								</h2>

								<div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faq_accordion">
									<div className="accordion-body">
										Currently, aside from the Osmosis team, instructors with a .edu email can create new courses using Osmosis Studio.
										However, any instructor can adjust and customize existing courses to suit their class size, class length, and any accessibility needs.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}