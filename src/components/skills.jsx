import React, { useContext } from "react";
import { FaqContext } from "../store/contexts/FaqContext";
import FaqItems from "./faqs";

const Skills = () => {
	const { allFaq } = useContext(FaqContext);
	const faqRender = () => {
		return allFaq.map((faq) => {
			const { id, question, answer } = faq;
			return (
				<FaqItems key={id} faq={question}>
					{answer}
				</FaqItems>
			);
		});
	};
	return (
		<section className='cta-full bg-light'>
			<div className='container-fluid'>
				<div className='row position-relative'>
					<div className='col-lg-4 col-md-4 col-12 padding-less img'>
						<div className='cta-full-img-box'>
							<div className='row justify-content-center'>
								<div className='col-12 text-center'>
									<div className='section-title'>
										<div className='titles'>
											<h4 className='title text-uppercase mb-4 pb-4'>FAQ</h4>
											<span></span>
										</div>
										<p className='text-muted mx-auto para-desc mb-0'>
											Why you hire me?
										</p>
									</div>
								</div>
							</div>
							<div className='row align-items-center'>{faqRender()}</div>
						</div>
					</div>

					<div className='col-lg-8 col-md-8 col-12 offset-lg-4'>
						<div className='cta-full-img-box'>
							<div className='row justify-content-center'>
								<div className='col-12 text-center'>
									<div className='section-title'>
										<div className='titles'>
											<h4 className='title text-uppercase mb-4 pb-4'>
												Expertise
											</h4>
											<span></span>
										</div>
										<p className='text-muted mx-auto para-desc mb-0'>
											Here is my some expertise.
										</p>
									</div>
								</div>
							</div>

							<div className='row align-items-center'>
								<div className='col-lg-3 col-md-4 col-12'>
									<ul
										className='nav nav-pills flex-column'
										id='pills-tab'
										role='tablist'
									>
										<li className='nav-item mt-2 pt-2'>
											<a className='nav-link active' id='pills-cloud-tab'>
												<div className='skill-container text-center pt-1 pb-1'>
													<h4 className='title font-weight-normal mb-0'>
														UX / UI
													</h4>
												</div>
											</a>
										</li>

										<li className='nav-item mt-2 pt-2'>
											<a className='nav-link' id='pills-smart-tab'>
												<div className='skill-container text-center pt-1 pb-1'>
													<h4 className='title font-weight-normal mb-0'>
														Languages
													</h4>
												</div>
											</a>
										</li>

										<li className='nav-item mt-2 pt-2'>
											<a className='nav-link' id='pills-apps-tab'>
												<div className='skill-container text-center pt-1 pb-1'>
													<h4 className='title font-weight-normal mb-0'>
														Others
													</h4>
												</div>
											</a>
										</li>
									</ul>
								</div>

								<div className='col-lg-9 col-md-8 col-12'>
									<div className='tab-content pl-lg-4' id='pills-tabContent'>
										<div
											className='tab-pane fade show active'
											id='pills-cloud'
											role='tabpanel'
											aria-labelledby='pills-cloud-tab'
										>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>HTML</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `45%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															45%
														</div>
													</div>
												</div>
											</div>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>CSS</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `75%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															75%
														</div>
													</div>
												</div>
											</div>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>JQuery</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `79%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															79%
														</div>
													</div>
												</div>
											</div>
										</div>

										<div
											className='tab-pane fade'
											id='pills-smart'
											role='tabpanel'
											aria-labelledby='pills-smart-tab'
										>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>English</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `84%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															84%
														</div>
													</div>
												</div>
											</div>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>Spanish</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `75%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															75%
														</div>
													</div>
												</div>
											</div>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>German</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `79%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															79%
														</div>
													</div>
												</div>
											</div>
										</div>

										<div
											className='tab-pane fade'
											id='pills-apps'
											role='tabpanel'
											aria-labelledby='pills-apps-tab'
										>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>Photoshop</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: `84%` }}
													>
														<div className='progress-value d-block text-muted h6'>
															84%
														</div>
													</div>
												</div>
											</div>
											<div className='progress-box mt-2 pt-2'>
												<h6 className='title text-muted'>Sketch</h6>
												<div className='progress'>
													<div
														className='progress-bar position-relative bg-custom'
														style={{ width: "75%" }}
													>
														<div className='progress-value d-block text-muted h6'>
															75%
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
