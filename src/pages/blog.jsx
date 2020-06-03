import React, { Fragment } from "react";
import { Link as NaveScroll } from "react-scroll";
import LayoutPage from "../layout";

const BlogPost = () => {
	return (
		<LayoutPage>
			<Fragment>
				<section className='bg-pages bg-light d-table w-100 home'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-12 text-center'>
								<div className='page-next-level'>
									<h4 className='title'>Become A Top Rated Software Developer.</h4>
									<p>
										I know that learn a programming language and writ fluenty
										code to build the software is so difficult but also I
										believe that mankind has good potential to do something. At
										this trend for learning anything, I think online is best
										friend and programming is not different also here I will
										provide you all the resources that can help you to become an
										awesome software developer.
									</p>

									<ul className='page-next d-inline-block p-2 pl-4 pr-4 rounded mb-0'>
										<li>
											<NaveScroll
												className='text-uppercase text-dark'
												to='begainer'
												spy={true}
												smooth={true}
												offset={-70}
												duration={800}
											>
												Begainer
											</NaveScroll>
										</li>
										<i class="fas fa-medal"></i>
										<li>
											<NaveScroll
												className='text-uppercase text-dark'
												to='intermideat'
												spy={true}
												smooth={true}
												offset={-70}
												duration={800}
											>
												Intermideat
											</NaveScroll>
										</li>
										<i class="fas fa-medal"></i>
										<li>
											<NaveScroll
												className='text-uppercase text-dark'
												to='expeart'
												spy={true}
												smooth={true}
												offset={-70}
												duration={800}
											>

												Expert
											</NaveScroll>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='section'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 col-md-6 col-12'>
								<div className='col-lg-12 col-md-12 col-12 begainer m-4'>
									<div className='page-next-level'>
										<h4 className='title mb-5 text-center'>Begainer Label</h4>
									</div>
									<div className='row'>
										<div className='col-lg-6 col-12 mb-4 pb-2'>
											<div className='blog-post rounded shadow'>
												<img
													src='images/blog/01.jpg'
													className='img-fluid rounded-top'
													alt=''
												/>
												<div className='content pt-4 pb-4 p-3'>
													<ul className='list-unstyled post-meta'>
														<li className='float-right'>
															<i className='mdi mdi-tag-outline mr-1'></i>
															<a href='/' className='text-dark'>
																Branding
															</a>
														</li>
														<li>
															<i className='mdi mdi-account-heart mr-1'></i>
															<a href='/' className='text-dark'>
																Cristino
															</a>
														</li>
													</ul>
													<a href='post-detail.html'>
														<h4 className='title text-dark'>
															Our Home Entertainment has Evolved Significantly
														</h4>
													</a>
													<ul className='list-unstyled post-meta mb-0 mt-3'>
														<li className='float-right'>
															<i className='mdi mdi-calendar-edit mr-1'></i>30th
															June, 2019
														</li>
														<li>
															<a href='/' className='text-dark'>
																Read More{" "}
																<i className='mdi mdi-chevron-right'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div className='col-lg-6 col-12 mb-4 pb-2'>
											<div className='blog-post rounded shadow'>
												<img
													src='images/blog/02.jpg'
													className='img-fluid rounded-top'
													alt=''
												/>
												<div className='content pt-4 pb-4 p-3'>
													<ul className='list-unstyled post-meta'>
														<li className='float-right'>
															<i className='mdi mdi-tag-outline mr-1'></i>
															<a href='/' className='text-dark'>
																Designing
															</a>
														</li>
														<li>
															<i className='mdi mdi-account-heart mr-1'></i>
															<a href='/' className='text-dark'>
																Cristino
															</a>
														</li>
													</ul>
													<a href='post-detail.html'>
														<h4 className='title text-dark'>
															These Are The Voyages of The Starship Enterprise
														</h4>
													</a>
													<ul className='list-unstyled post-meta mb-0 mt-3'>
														<li className='float-right'>
															<i className='mdi mdi-calendar-edit mr-1'></i>30th
															June, 2019
														</li>
														<li>
															<a href='/' className='text-dark'>
																Read More{" "}
																<i className='mdi mdi-chevron-right'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-12 col-md-12 col-12 intermideat m-4'>
									<div className='page-next-level'>
										<h4 className='title mb-5 text-center'>
											Intermideat Label
										</h4>
									</div>
									<div className='row'>
										<div className='col-lg-6 col-12 mb-4 pb-2'>
											<div className='blog-post rounded shadow'>
												<img
													src='images/blog/01.jpg'
													className='img-fluid rounded-top'
													alt=''
												/>
												<div className='content pt-4 pb-4 p-3'>
													<ul className='list-unstyled post-meta'>
														<li className='float-right'>
															<i className='mdi mdi-tag-outline mr-1'></i>
															<a href='/' className='text-dark'>
																Branding
															</a>
														</li>
														<li>
															<i className='mdi mdi-account-heart mr-1'></i>
															<a href='/' className='text-dark'>
																Cristino
															</a>
														</li>
													</ul>
													<a href='post-detail.html'>
														<h4 className='title text-dark'>
															Our Home Entertainment has Evolved Significantly
														</h4>
													</a>
													<ul className='list-unstyled post-meta mb-0 mt-3'>
														<li className='float-right'>
															<i className='mdi mdi-calendar-edit mr-1'></i>30th
															June, 2019
														</li>
														<li>
															<a href='/' className='text-dark'>
																Read More{" "}
																<i className='mdi mdi-chevron-right'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div className='col-lg-6 col-12 mb-4 pb-2'>
											<div className='blog-post rounded shadow'>
												<img
													src='images/blog/02.jpg'
													className='img-fluid rounded-top'
													alt=''
												/>
												<div className='content pt-4 pb-4 p-3'>
													<ul className='list-unstyled post-meta'>
														<li className='float-right'>
															<i className='mdi mdi-tag-outline mr-1'></i>
															<a href='/' className='text-dark'>
																Designing
															</a>
														</li>
														<li>
															<i className='mdi mdi-account-heart mr-1'></i>
															<a href='/' className='text-dark'>
																Cristino
															</a>
														</li>
													</ul>
													<a href='post-detail.html'>
														<h4 className='title text-dark'>
															These Are The Voyages of The Starship Enterprise
														</h4>
													</a>
													<ul className='list-unstyled post-meta mb-0 mt-3'>
														<li className='float-right'>
															<i className='mdi mdi-calendar-edit mr-1'></i>30th
															June, 2019
														</li>
														<li>
															<a href='/' className='text-dark'>
																Read More{" "}
																<i className='mdi mdi-chevron-right'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='col-lg-12 col-md-12 col-12 expeart m-4'>
									<div className='page-next-level'>
										<h4 className='title mb-5 text-center'>Expeart Label</h4>
									</div>
									<div className='row'>
										<div className='col-lg-6 col-12 mb-4 pb-2'>
											<div className='blog-post rounded shadow'>
												<img
													src='images/blog/01.jpg'
													className='img-fluid rounded-top'
													alt=''
												/>
												<div className='content pt-4 pb-4 p-3'>
													<ul className='list-unstyled post-meta'>
														<li className='float-right'>
															<i className='mdi mdi-tag-outline mr-1'></i>
															<a href='/' className='text-dark'>
																Branding
															</a>
														</li>
														<li>
															<i className='mdi mdi-account-heart mr-1'></i>
															<a href='/' className='text-dark'>
																Cristino
															</a>
														</li>
													</ul>
													<a href='post-detail.html'>
														<h4 className='title text-dark'>
															Our Home Entertainment has Evolved Significantly
														</h4>
													</a>
													<ul className='list-unstyled post-meta mb-0 mt-3'>
														<li className='float-right'>
															<i className='mdi mdi-calendar-edit mr-1'></i>30th
															June, 2019
														</li>
														<li>
															<a href='/' className='text-dark'>
																Read More{" "}
																<i className='mdi mdi-chevron-right'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div className='col-lg-6 col-12 mb-4 pb-2'>
											<div className='blog-post rounded shadow'>
												<img
													src='images/blog/02.jpg'
													className='img-fluid rounded-top'
													alt=''
												/>
												<div className='content pt-4 pb-4 p-3'>
													<ul className='list-unstyled post-meta'>
														<li className='float-right'>
															<i className='mdi mdi-tag-outline mr-1'></i>
															<a href='/' className='text-dark'>
																Designing
															</a>
														</li>
														<li>
															<i className='mdi mdi-account-heart mr-1'></i>
															<a href='/' className='text-dark'>
																Cristino
															</a>
														</li>
													</ul>
													<a href='post-detail.html'>
														<h4 className='title text-dark'>
															These Are The Voyages of The Starship Enterprise
														</h4>
													</a>
													<ul className='list-unstyled post-meta mb-0 mt-3'>
														<li className='float-right'>
															<i className='mdi mdi-calendar-edit mr-1'></i>30th
															June, 2019
														</li>
														<li>
															<a href='/' className='text-dark'>
																Read More{" "}
																<i className='mdi mdi-chevron-right'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-12'>
									<ul className='pagination justify-content-center mb-0 list-unstyled'>
										<li>
											<a href='#' className='pr-3 pl-3 pt-2 pb-2'>
												Previous
											</a>
										</li>
										<li className='active'>
											<a href='#' className='pr-3 pl-3 pt-2 pb-2'>
												1
											</a>
										</li>
										<li>
											<a href='#' className='pr-3 pl-3 pt-2 pb-2'>
												2
											</a>
										</li>
										<li>
											<a href='#' className='pr-3 pl-3 pt-2 pb-2'>
												3
											</a>
										</li>
										<li>
											<a href='#' className='pr-3 pl-3 pt-2 pb-2'>
												Next
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0'>
								<div className='sidebar'>
									<div className='widget'>
										<div className='p-4 rounded shadow'>
											<h4 className='widget-title pt-2 pb-2 bg-light rounded text-center'>
												Author
											</h4>
											<div className='text-center author mt-4'>
												<img
													src='images/author.jpg'
													className='img-fluid mx-auto rounded-pill sidebar-img'
													alt=''
												/>
												<div className='mt-4'>
													<h6 className='name'>As Md Habibullah</h6>
													<small>Software Developer</small>
													<ul className='list-unstyled social-icon social mt-4 mb-0'>
														<li className='list-inline-item'>
															<a href='#' className='rounded'>
																<i className='mdi mdi-facebook'></i>
															</a>
														</li>
														<li className='list-inline-item'>
															<a href='#' className='rounded'>
																<i className='mdi mdi-instagram'></i>
															</a>
														</li>
														<li className='list-inline-item'>
															<a href='#' className='rounded'>
																<i className='mdi mdi-twitter'></i>
															</a>
														</li>
														<li className='list-inline-item'>
															<a href='#' className='rounded'>
																<i className='mdi mdi-vimeo'></i>
															</a>
														</li>
														<li className='list-inline-item'>
															<a href='#' className='rounded'>
																<i className='mdi mdi-dribbble'></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div className='widget mt-4 pt-2'>
										<div className='p-4 rounded shadow'>
											<h4 className='widget-title pt-2 pb-2 bg-light rounded text-center'>
												Search
											</h4>
											<div id='search2' className='widget-search mt-4 mb-0'>
												<form
													role='search'
													method='get'
													id='searchform'
													className='searchform'
												>
													<div>
														<input
															type='text'
															className='border rounded'
															name='s'
															id='s'
															placeholder='Search Keywords...'
														/>
														<input
															type='submit'
															id='searchsubmit'
															value='Search'
														/>
													</div>
												</form>
											</div>
										</div>
									</div>

									<div className='widget mt-4 pt-2'>
										<div className='p-4 rounded shadow'>
											<h4 className='widget-title pt-2 pb-2 bg-light rounded text-center'>
												Catagories
											</h4>
											<ul className='list-unstyled mt-4 mb-0 catagories'>
												<li>
													<a href='#'>Finance</a>
													<span className='float-right'>13</span>
												</li>
												<li>
													<a href='#'>Business</a>
													<span className='float-right'>09</span>
												</li>
												<li>
													<a href='#'>Blog</a>
													<span className='float-right'>18</span>
												</li>
												<li>
													<a href='#'>Corporate</a>
													<span className='float-right'>20</span>
												</li>
												<li>
													<a href='#'>Investment</a>
													<span className='float-right'>22</span>
												</li>
											</ul>
										</div>
									</div>

									<div className='widget mt-4 pt-2'>
										<div className='p-4 rounded shadow'>
											<h4 className='widget-title pt-2 pb-2 bg-light rounded text-center'>
												Recent Post
											</h4>
											<div className='mt-4'>
												<div className='clearfix post-recent'>
													<div className='post-recent-thumb float-left'>
														<a href='#'>
															<img
																alt='img'
																src='images/blog/07.jpg'
																className='img-fluid rounded'
															/>
														</a>
													</div>
													<div className='post-recent-content float-left'>
														<a href='#'>Consultant Business</a>
														<span className='text-muted mt-2'>
															15th June, 2019
														</span>
													</div>
												</div>
												<div className='clearfix post-recent'>
													<div className='post-recent-thumb float-left'>
														<a href='#'>
															<img
																alt='img'
																src='images/blog/08.jpg'
																className='img-fluid rounded'
															/>
														</a>
													</div>
													<div className='post-recent-content float-left'>
														<a href='#'>Look On The Glorious Balance</a>
														<span className='text-muted mt-2'>
															15th June, 2019
														</span>
													</div>
												</div>
												<div className='clearfix post-recent'>
													<div className='post-recent-thumb float-left'>
														<a href='#'>
															<img
																alt='img'
																src='images/blog/01.jpg'
																className='img-fluid rounded'
															/>
														</a>
													</div>
													<div className='post-recent-content float-left'>
														<a href='#'>Research Financial.</a>
														<span className='text-muted mt-2'>
															15th June, 2019
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='widget mt-4 pt-2 text-center'>
										<div className='p-4 rounded shadow'>
											<h4 className='widget-title pt-2 pb-2 bg-light rounded'>
												Tags Cloud
											</h4>
											<div className='tagcloud mt-4'>
												<a href='#' className='rounded'>
													Business
												</a>
												<a href='#' className='rounded'>
													Finance
												</a>
												<a href='#' className='rounded'>
													Marketing
												</a>
												<a href='#' className='rounded'>
													Fashion
												</a>
												<a href='#' className='rounded'>
													Bride
												</a>
												<a href='#' className='rounded'>
													Lifestyle
												</a>
												<a href='#' className='rounded'>
													Travel
												</a>
												<a href='#' className='rounded'>
													Beauty
												</a>
												<a href='#' className='rounded'>
													Video
												</a>
												<a href='#' className='rounded'>
													Audio
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		</LayoutPage>
	);
};

export default BlogPost;
