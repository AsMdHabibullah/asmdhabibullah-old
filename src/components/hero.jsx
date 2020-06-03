import React from "react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
	return (
		<section className='bg-modern bg-light bg-animation-right' id='home'>
			<div className='container'>
				<div
					className='row align-items-center position-relative'
					style={{ zIndex: 1 }}
				>
					<div className='col-lg-7 col-md-7 col-12'>
						<div className='title-heading'>
							<h2 className='sub-title'>Looking for a software developer!</h2>
							<h1 className='heading text-custom mb-3'>As Md Habibullah</h1>
							<p className='para-desc text-muted'>
								Obviously I'M here as a software developer. More than three
								years of expertise in web, IOS, Android and open source custom
								software development fields. If you contact me it would be a
								great pleasure.
							</p>
							<div className='mt-4'>
								<a href='/' className='btn btn-pill btn-custom mb-2 mr-2'>
									Hire Me
								</a>
								<a href='/' className='btn btn-pill btn-outline-custom mb-2'>
									Download CV <i className='mdi mdi-download'></i>
								</a>
							</div>
						</div>
					</div>

					<div className='col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0'>
						<div className='hero-img'>
							<img src='images/home/hero.png' className='img-fluid' alt='' />
						</div>
					</div>
				</div>
			</div>
			<ScrollLink
				className='mouse-icon d-none d-md-inline-block rounded-pill bg-transparent mouse-down'
				to='about'
				spy={true}
				smooth={true}
				offset={-50}
				duration={800}
			>
				<span className='wheel position-relative d-block mover'></span>
			</ScrollLink>
		</section>
	);
};

export default HeroSection;
