import { Link as NaveScroll } from "react-scroll";

const AboutMe = () => {
	return (
		<section className='section' id='about'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-5 col-md-5'>
						<div className='about-hero'>
							<img
								src='images/hero.png'
								className='img-fluid mx-auto d-block position-relative'
								alt=''
							/>
						</div>
					</div>

					<div className='col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0'>
						<div className='section-title about-info mb-0 ml-lg-5 ml-md-3'>
							<h4 className='title text-custom mb-3'>As Md Habibullah</h4>
							<h6 className='designation mb-3'>
								<span className="mr-1">I'm Passionate</span>
								<span className='text-custom'>Software developer</span>
							</h6>
							<p className='text-muted'>
								I believe you already understand who I. Now once more, I am a
								passionate software developer and I love to write code open
								source projects. You can mail me directly or you can send me a
								message from the contact page.
							</p>
							<div className='about-list'>
								<ul className='list-unstyled'>
									<li>
										<span className='list-title list-inline-item'>
											Study:
										</span>
										<span>Yunnan University</span>
									</li>
									<li>
										<span className='list-title list-inline-item'>
											Degree:
										</span>
										<span>B.Sc in Computer Science & Technology</span>
									</li>
									<li>
										<span className='list-title list-inline-item'>
											Email:
										</span>
										<span>asmdhabibullah@yahoo.com</span>
									</li>
									<li>
										<span className='list-title list-inline-item'>
											Address:
										</span>
										<span>650500, Kunming - China</span>
									</li>
									<li>
										<span className='list-title list-inline-item'>Age:</span>
										<span>23 Years</span>
									</li>
									<li>
										<span className='list-title list-inline-item'>
											Nationality:
										</span>
										<span>Bangladeshi</span>
									</li>
								</ul>
							</div>
							<div className='mt-4'>
								<NaveScroll
									className='btn btn-pill btn-custom mouse-down'
									to='projects'
									spy={true}
									smooth={true}
									offset={-70}
									duration={800}
								>
									View Portfolio
								</NaveScroll>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container pt-100 pt-60'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center'>
						<div className='section-title'>
							<div className='titles'>
								<h4 className='title text-uppercase mb-4 pb-4'>
									Hobbies & Interests
								</h4>
								<span></span>
							</div>
							<p className='text-muted mx-auto para-desc mb-0'>
								As a software developer when I get some free time, I like to do
								some other things.
							</p>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-3 col-md-4 col-12 mt-4 pt-2'>
						<div className='interests-desc bg-light position-relative p-2 rounded'>
							<div className='hobbies d-flex'>
								<div className='icon text-center rounded-pill mr-4'>
									<i className='mdi mdi-24px mdi-airplane-takeoff'></i>
								</div>
								<div className='content mt-2'>
									<h4 className='title mb-0'>Sports - Football</h4>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-4 col-12 mt-4 pt-2'>
						<div className='interests-desc bg-light position-relative p-2 rounded'>
							<div className='hobbies d-flex'>
								<div className='icon text-center rounded-pill mr-4'>
									<i className='mdi mdi-24px mdi-airplane-takeoff'></i>
								</div>
								<div className='content mt-2'>
									<h4 className='title mb-0'>Sports - Cricket</h4>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-4 col-12 mt-4 pt-2'>
						<div className='interests-desc bg-light position-relative p-2 rounded'>
							<div className='hobbies d-flex'>
								<div className='icon text-center rounded-pill mr-4'>
									<i className='mdi mdi-24px mdi-car-sports'></i>
								</div>
								<div className='content mt-2'>
									<h4 className='title mb-0'>Traveling</h4>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-md-4 col-12 mt-4 pt-2'>
						<div className='interests-desc bg-light position-relative p-2 rounded'>
							<div className='hobbies d-flex'>
								<div className='icon text-center rounded-pill mr-4'>
									<i className='mdi mdi-24px mdi-book-open-variant'></i>
								</div>
								<div className='content mt-2'>
									<h4 className='title mb-0'>Reading Book</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
