import React, { useEffect } from "react";
import { Link as NaveScroll } from "react-scroll";

function Footer() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollBottom = window.scrollY > 500;
			const btn = document.getElementById("back-to-top");
			if (scrollBottom) {
				btn.classList.add("click-top");
			} else {
				btn.classList.remove("click-top");
			}
		});
	});
	return (
		<section>
			<footer className='footer bg-dark'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-12 text-center'>
							<NaveScroll
								to='home'
								spy={true}
								smooth={true}
								offset={1}
								duration={1200}
							>
								<img
									className='footer-img'
									src='images/logo.png'
									height='20'
									alt=''
								/>
							</NaveScroll>
							<p className='para-desc mx-auto mt-4'>
								I am a student of computer science & technology department at
								Yunnan University and also as a software developer, right now I
								am working on Fiverr and Upwork.
							</p>
							<ul className='list-unstyled mb-0 mt-4 social-icon'>
								<li className='list-inline-item'>
									<a href='/'>
										<i className='fa fa-facebook'></i>
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='/'>
										<i className='fa fa-twitter'></i>
									</a>
								</li>

								<li className='list-inline-item'>
									<a href='/'>
										<i className='fa fa-linkedin'></i>
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='/'>
										<i className='fa fa-github'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<footer className='footer footer-bar bg-dark'>
				<div className='container text-foot text-center'>
					<p className='mb-0'>
						2020 &copy; Reserved by -
						<i className='mdi mdi-heart text-danger' />
						<a
							href='http://www.asmdhabibullah.com'
							target='_blank'
							className='text-white'
						>
							As Md Habibullah
						</a>
					</p>
				</div>
			</footer>
			<NaveScroll
				className='back-to-top rounded text-center'
				id='back-to-top'
				to='home'
				spy={true}
				smooth={true}
				offset={1}
				duration={1200}
			>
				<i className='fa fa-arrow-up d-block'> </i>
			</NaveScroll>
		</section>
	);
}

export default Footer;
