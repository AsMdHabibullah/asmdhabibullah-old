import React, { useState, useEffect, Fragment } from "react";
import { Link as NaveScroll } from "react-scroll";
import Link from "next/link";

const NavBer = () => {
	const [naveCls, setNavCls] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const isTop = window.scrollY > 350;
			const nave = document.getElementById("navbar-wrap");
			if (isTop) {
				nave.classList.add("sticky");
			} else {
				nave.classList.remove("sticky");
			}
		});
	});

	const toggleNavber = (e) => {
		e.preventDefault();
		setNavCls(!naveCls);
	};

	const resetNaveCls = (e) => {
		e.preventDefault();
		setNavCls(!naveCls);
	};

	return (
		<nav
			className='navbar navbar-expand-lg fixed-top navbar-custom navbar-light bg-light'
			id='navbar-wrap'
		>
			<div
				className={`${naveCls ? "window-wrap" : ""}`}
				onClick={(e) => resetNaveCls(e)}
			></div>
			<div className='container'>
				<div className='navbar-brand'>
					<Link href='/'>
						<img className='logo' src='images/logo.png' alt='Logo' />
					</Link>
				</div>

				<button
					className='navbar-toggler'
					type='button'
					onClick={(e) => toggleNavber(e)}
				>
					<span className={`${naveCls ? "fa fa-times" : "fa fa-bars"}`}></span>
				</button>

				<div className={`collapse navbar-collapse ${naveCls ? "show" : ""}`}>
					<ul className='navbar-nav navbar-nav-link mx-auto'>
						<li className='nav-item'>
							<NaveScroll
								className='nav-link'
								to='home'
								spy={true}
								smooth={true}
								offset={-50}
								duration={800}
							>
								Home
							</NaveScroll>
						</li>
						<li className='nav-item'>
							<NaveScroll
								className='nav-link'
								to='services'
								spy={true}
								smooth={true}
								offset={-70}
								duration={800}
							>
								Services
							</NaveScroll>
						</li>
						<li className='nav-item'>
							<NaveScroll
								className='nav-link'
								to='resume'
								spy={true}
								smooth={true}
								offset={-70}
								duration={800}
							>
								Resume
							</NaveScroll>
						</li>
						<li className='nav-item'>
							<NaveScroll
								className='nav-link'
								to='cta-full'
								spy={true}
								smooth={true}
								offset={-70}
								duration={800}
							>
								Skills
							</NaveScroll>
						</li>
						<li className='nav-item'>
							<NaveScroll
								className='nav-link'
								to='projects'
								spy={true}
								smooth={true}
								offset={-70}
								duration={800}
							>
								Projects
							</NaveScroll>
						</li>
						<li className='nav-item'>
							<Link href='/blog'>
								<a className='nav-link'>Blog</a>
							</Link>
						</li>
						<li className='nav-item'>
							<NaveScroll
								className='nav-link'
								to='contact'
								spy={true}
								smooth={true}
								offset={-70}
								duration={800}
							>
								Contact
							</NaveScroll>
						</li>
					</ul>

					<ul className='list-unstyled mb-0 mt-2 mt-sm-0 social-icon light-social-icon'>
						<li className='list-inline-item nave-social-icon'>
							<Link href='/'>
								<i className='fa fa-facebook' />
							</Link>
						</li>
						<li className='list-inline-item nave-social-icon'>
							<Link href='/'>
								<i className='fa fa-twitter' />
							</Link>
						</li>
						<li className='list-inline-item nave-social-icon'>
							<Link href='/'>
								<i className='fa fa-linkedin' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBer;
