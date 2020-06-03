import React, { Fragment } from "react";

const SingleReviews = (props) => {
	const { project_name, client_name, client_img, country, sayes } = props;
	const client = client_img ? `/images/client/client.png` : "";
	return (
		<Fragment>
			<div className="col-xl-4 text-center">
				<div className='slider-wrapper'>
					<div className='slider-item'>
						<div className='client-review border rounded m-3 mb-4 position-relative shadow'>
							<div className='review-star'>
								<div className='review-base'>
									<h6 className='title'>{project_name}</h6>
								</div>
							</div>
							<p className='text-muted review-para font-italic mt-3 mb-3'>
								{sayes}
							</p>
							<div className='reviewer'>
								<img
									src={client}
									className='img-fluid rounded-pill float-left mr-3'
									alt=''
								/>
								<div className='content d-block overflow-hidden'>
									<h4 className='name mb-0 text-uppercase'>{client_name}</h4>
									<small className='designation text-muted'>{country}</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleReviews;
