import React, { Fragment } from "react";

const Contact = () => {
	return (
		<Fragment>
			<section className='section pb-0' id='contact'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-12 text-center'>
							<div className='section-title'>
								<div className='titles'>
									<h4 className='title text-uppercase mb-4 pb-4'>Contact Me</h4>
									<span></span>
								</div>
								<p className='text-muted mx-auto para-desc mb-0'>
									The various contact information, you can use any to contact
									me.
								</p>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-4 mt-4 pt-2'>
							<div className='contact-detail text-center'>
								<div className='icon'>
									<i className='mdi mdi-phone'></i>
								</div>
								<div className='content mt-3'>
									<h4 className='title text-uppercase'>Phone</h4>
									<p className='text-muted'>
										This is my phone number. If you from China mainland then you
										are welcome.
									</p>
									<a href='tel:+152534-468-854' className='text-custom'>
										+86 1560 880 7860
									</a>
								</div>
							</div>
						</div>

						<div className='col-md-4 mt-4 pt-2'>
							<div className='contact-detail text-center'>
								<div className='icon'>
									<i className='mdi mdi-email'></i>
								</div>
								<div className='content mt-3'>
									<h4 className='title text-uppercase'>Email</h4>
									<p className='text-muted'>
										From anywhere you can mail me, it's my email.
									</p>
									<a href='mailto:contact@example.com' className='text-custom'>
										contact@example.com
									</a>
								</div>
							</div>
						</div>

						<div className='col-md-4 mt-4 pt-2'>
							<div className='contact-detail text-center'>
								<div className='icon'>
									<i className='mdi mdi-map-marker'></i>
								</div>
								<div className='content mt-3'>
									<h4 className='title text-uppercase'>Location</h4>
									<p className='text-muted'>Kunming, Yunnan, China - 650500</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='section pt-5 mt-3'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-12'>
							<div className='custom-form mb-sm-30'>
								<div id='message'></div>
								<form
									method='post'
									action='php/contact.php'
									name='contact-form'
									id='contact-form'
								>
									<div className='row'>
										<div className='col-lg-6'>
											<div className='row'>
												<div className='col-lg-12 col-md-6'>
													<div className='form-group'>
														<input
															name='name'
															id='name'
															type='text'
															className='form-control border rounded'
															placeholder='First Name :'
														/>
													</div>
												</div>

												<div className='col-lg-12 col-md-6'>
													<div className='form-group'>
														<input
															name='email'
															id='email'
															type='email'
															className='form-control border rounded'
															placeholder='Your email :'
														/>
													</div>
												</div>

												<div className='col-lg-12'>
													<div className='form-group'>
														<input
															name='subject'
															id='subject'
															className='form-control border rounded'
															placeholder='Your subject :'
														/>
													</div>
												</div>
											</div>
										</div>

										<div className='col-lg-6'>
											<div className='form-group'>
												<textarea
													name='comments'
													id='comments'
													rows='4'
													className='form-control border rounded'
													placeholder='Your Message :'
												></textarea>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-sm-12 text-right'>
											<input
												type='submit'
												id='submit'
												name='send'
												className='submitBnt btn btn-pill btn-custom'
												value='Send Message'
											/>
											<div id='simple-msg'></div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Contact;
