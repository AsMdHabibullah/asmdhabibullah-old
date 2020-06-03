import React, { Fragment } from "react";

const PostDetails = () => {
	return (
		<Fragment>
			<section className='bg-pages bg-light d-table w-100'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-12 text-center'>
							<div className='page-next-level'>
								<h4 className='title'>
									Three Reasons Visibility Matters in Supply Chain
								</h4>
								<ul className='list-unstyled mt-3'>
									<li className='list-inline-item mr-3'>
										<i className='mdi mdi-tag-outline mr-1'></i>
										<a href='#' className='text-muted'>
											Photography
										</a>
									</li>
									<li className='list-inline-item mr-3'>
										<i className='mdi mdi-account-heart mr-1'></i>
										<a href='#' className='text-muted'>
											Cristino Murphy
										</a>
									</li>
									<li className='list-inline-item'>
										<i className='mdi mdi-calendar-edit mr-1'></i>
										<span className='text-muted'>25th August, 2019</span>
									</li>
								</ul>
								<ul className='page-next d-inline-block p-2 pl-4 pr-4 rounded mb-0'>
									<li>
										<a href='index.html' className='text-uppercase text-dark'>
											Home
										</a>
									</li>
									<li>
										<a
											href='page_blog.html'
											className='text-uppercase text-dark'
										>
											Blog
										</a>
									</li>
									<li>
										<span className='text-uppercase text-custom'>
											Blog Detail
										</span>
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
						<div className='col-lg-5 col-md-4'>
							<div className='sidebar'>
								<img
									src='images/blog/single-1.jpg'
									className='img-fluid rounded d-block'
									alt=''
								/>
								<img
									src='images/blog/06.jpg'
									className='img-fluid rounded mt-4'
									alt=''
								/>
							</div>
						</div>
						<div className='col-lg-7 col-md-8 mt-4 mt-sm-0 pt-2 pt-sm-0'>
							<div className='blog position-relative overflow-hidden shadow rounded'>
								<div className='content p-4'>
									<h6 className='font-weight-normal'>
										<i className='mdi mdi-tag text-custom mr-1'></i>
										<a href='javscript:void(0)' className='text-custom'>
											Photography
										</a>
									</h6>
									<p className='text-muted mt-3'>
										The most well-known dummy text is the 'Lorem Ipsum', which
										is said to have originated in the 16th century. Lorem Ipsum
										is composed in a pseudo-Latin language which more or less
										corresponds to 'proper' Latin. It contains a series of real
										Latin words. This ancient dummy text is also
										incomprehensible, but it imitates the rhythm of most
										European languages in Latin script.
									</p>
									<blockquote className='blockquote mt-3 p-3'>
										<p className='text-muted mb-0 font-italic'>
											" There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised words which
											don't look even slightly believable. "
										</p>
									</blockquote>
									<p className='text-muted'>
										The advantage of its Latin origin and the relative
										meaninglessness of Lorum Ipsum is that the text does not
										attract attention to itself or distract the viewer's
										attention from the layout.
									</p>
									<div className='post-meta mt-3'>
										<ul className='list-unstyled mb-0'>
											<li className='list-inline-item float-right'>
												<ul className='list-unstyled'>
													<li className='list-inline-item'>Share :</li>
													<li className='list-inline-item'>
														<a href='#' className='text-muted'>
															<i className='mdi mdi-facebook'></i>
														</a>
													</li>
													<li className='list-inline-item'>
														<a href='#' className='text-muted'>
															<i className='mdi mdi-instagram'></i>
														</a>
													</li>
													<li className='list-inline-item'>
														<a href='#' className='text-muted'>
															<i className='mdi mdi-google-plus'></i>
														</a>
													</li>
													<li className='list-inline-item'>
														<a href='#' className='text-muted'>
															<i className='mdi mdi-twitter'></i>
														</a>
													</li>
												</ul>
											</li>
											<li className='list-inline-item mr-2'>
												<a href='#' className='text-muted like'>
													<i className='mdi mdi-heart-outline mr-1'></i>33
												</a>
											</li>
											<li className='list-inline-item'>
												<a href='#' className='text-muted comments'>
													<i className='mdi mdi-comment-outline mr-1'></i>08
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mt-4 pt-2 comment-area '>
								<div className='p-4 shadow rounded'>
									<h4 className='page-title pb-3'>Comments :</h4>
									<ul className='media-list list-unstyled mb-0'>
										<li className='media mt-4'>
											<a className='float-left pr-3 mt-2' href='#'>
												<img
													className='img-fluid d-block mx-auto img-thumbnail rounded-circle'
													src='images/client/01.jpg'
													alt='img'
												/>
											</a>

											<div className='media-body'>
												<a href='#' className='float-right text-muted'>
													<i className='mdi mdi-reply'></i>&nbsp; Reply
												</a>
												<h4 className='media-heading mb-0'>
													<a href='#' className='text-dark'>
														Lorenzo Peterson
													</a>
												</h4>
												<small className='text-muted'>
													26th August, 2019 at 01:25 pm
												</small>
												<p className='mt-2 bg-light font-italic media-para text-muted rounded pt-3 pb-3 pl-4 pr-3 mb-0'>
													It is a long established fact that a reader will be
													distracted by the readable content of a page when
													looking at its layout. The point of using Lorem Ipsum
													is that it has a more-or-less normal
												</p>
											</div>
										</li>

										<li className='media mt-4'>
											<a className='float-left pr-3 mt-2' href='#'>
												<img
													className='img-fluid d-block mx-auto img-thumbnail rounded-circle'
													src='images/client/02.jpg'
													alt='img'
												/>
											</a>

											<div className='media-body'>
												<a href='#' className='float-right text-muted'>
													<i className='mdi mdi-reply'></i>&nbsp; Reply
												</a>
												<h4 className='media-heading mb-0'>
													<a href='#' className='text-dark'>
														Tammy Camacho
													</a>
												</h4>
												<small className='text-muted'>
													26th August, 2019 at 03:55 pm
												</small>
												<p className='mt-2 bg-light font-italic media-para text-muted rounded pt-3 pb-3 pl-4 pr-3 mb-0'>
													There are many variations of passages of Lorem Ipsum
													available, but the majority have suffered alteration
													in some form, by injected humour
												</p>
											</div>
										</li>

										<li className='media mt-4'>
											<a className='float-left pr-3 mt-2' href='#'>
												<img
													className='img-fluid d-block mx-auto img-thumbnail rounded-circle'
													src='images/client/03.jpg'
													alt='img'
												/>
											</a>

											<div className='media-body'>
												<a href='#' className='float-right text-muted'>
													<i className='mdi mdi-reply'></i>&nbsp; Reply
												</a>
												<h4 className='media-heading mb-0'>
													<a href='#' className='text-dark'>
														Eleanor Crisp
													</a>
												</h4>
												<small className='text-muted'>
													26th August, 2019 at 05:44 pm
												</small>
												<p className='mt-2 bg-light font-italic media-para text-muted rounded pt-3 pb-3 pl-4 pr-3 mb-0'>
													All the Lorem Ipsum generators on the Internet tend to
													repeat predefined chunks as necessary, making this the
													first true generator on the Internet.
												</p>

												<div className='media sub_media mt-4'>
													<a className='float-left pr-3' href='#'>
														<img
															className='img-fluid d-block mx-auto img-thumbnail rounded-circle'
															src='images/client/04.jpg'
															alt='img'
														/>
													</a>
													<div className='media-body'>
														<a href='#' className='float-right text-muted'>
															<i className='mdi mdi-reply'></i>&nbsp; Reply
														</a>
														<h4 className='media-heading mb-0'>
															<a href='#' className='text-dark'>
																Richard Combs
															</a>
														</h4>
														<small className='text-muted'>
															26th August, 2019 at 06:14 am
														</small>
														<p className='mt-2 bg-light font-italic media-para text-muted rounded pt-3 pb-3 pl-4 pr-3 mb-0'>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit. Nam viverra euismod odio, gravida
															pellentesque urna varius vitae.
														</p>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className='mt-4 pt-2'>
								<div className='p-4 shadow rounded'>
									<h4 className='page-title pb-3'>Leave A Comment :</h4>
									<form>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group'>
													<textarea
														id='message'
														placeholder='Your Comment'
														rows='5'
														name='message'
														className='form-control border rounded'
														required=''
													></textarea>
												</div>
											</div>

											<div className='col-md-6'>
												<div className='form-group'>
													<input
														id='name'
														name='name'
														type='text'
														placeholder='Name'
														className='form-control border rounded'
														required=''
													/>
												</div>
											</div>

											<div className='col-md-6'>
												<div className='form-group'>
													<input
														id='email'
														type='email'
														placeholder='Email'
														name='email'
														className='form-control border rounded'
														required=''
													/>
												</div>
											</div>

											<div className='col-md-12'>
												<div className='send'>
													<button
														type='submit'
														className='btn btn-pill btn-custom'
													>
														Send comment
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='section pt-0' id='news'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-12 text-center'>
							<div className='section-title'>
								<div className='titles'>
									<h4 className='title text-uppercase mb-4 pb-4'>
										Related Post
									</h4>
									<span></span>
								</div>
								<p className='text-muted mx-auto para-desc mb-0'>
									Obviously I'M Web Designer. Experienced with all stages of the
									development cycle for dynamic web projects.
								</p>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-lg-4 col-md-6 col-12 mt-4 pt-2'>
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
											<a href='#' className='text-dark'>
												Branding
											</a>
										</li>
										<li>
											<i className='mdi mdi-account-heart mr-1'></i>
											<a href='#' className='text-dark'>
												Cristino
											</a>
										</li>
									</ul>
									<a href='page_blog_detail.html'>
										<h4 className='title text-dark'>
											Our Home Entertainment has Evolved Significantly
										</h4>
									</a>
									<ul className='list-unstyled post-meta mb-0 mt-3'>
										<li className='float-right'>
											<i className='mdi mdi-calendar-edit mr-1'></i>30th June,
											2019
										</li>
										<li>
											<a href='#' className='text-dark'>
												Read More <i className='mdi mdi-chevron-right'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 col-12 mt-4 pt-2'>
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
											<a href='#' className='text-dark'>
												Designing
											</a>
										</li>
										<li>
											<i className='mdi mdi-account-heart mr-1'></i>
											<a href='#' className='text-dark'>
												Cristino
											</a>
										</li>
									</ul>
									<a href='page_blog_detail.html'>
										<h4 className='title text-dark'>
											These Are The Voyages of The Starship Enterprise
										</h4>
									</a>
									<ul className='list-unstyled post-meta mb-0 mt-3'>
										<li className='float-right'>
											<i className='mdi mdi-calendar-edit mr-1'></i>30th June,
											2019
										</li>
										<li>
											<a href='#' className='text-dark'>
												Read More <i className='mdi mdi-chevron-right'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 col-12 mt-4 pt-2'>
							<div className='blog-post rounded shadow'>
								<img
									src='images/blog/03.jpg'
									className='img-fluid rounded-top'
									alt=''
								/>
								<div className='content pt-4 pb-4 p-3'>
									<ul className='list-unstyled post-meta'>
										<li className='float-right'>
											<i className='mdi mdi-tag-outline mr-1'></i>
											<a href='#' className='text-dark'>
												Photography
											</a>
										</li>
										<li>
											<i className='mdi mdi-account-heart mr-1'></i>
											<a href='#' className='text-dark'>
												Cristino
											</a>
										</li>
									</ul>
									<a href='page_blog_detail.html'>
										<h4 className='title text-dark'>
											Three Reasons Visibility Matters in Supply Chain
										</h4>
									</a>
									<ul className='list-unstyled post-meta mb-0 mt-3'>
										<li className='float-right'>
											<i className='mdi mdi-calendar-edit mr-1'></i>30th June,
											2019
										</li>
										<li>
											<a href='#' className='text-dark'>
												Read More <i className='mdi mdi-chevron-right'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default PostDetails;
