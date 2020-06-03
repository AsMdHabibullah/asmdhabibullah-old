import React from "react";

const SingleProject = ({ name, url, tags, developer }) => {
	return (
		<div className='col-lg-4 col-md-6 p-0 web'>
			<div className='portfolio-box position-relative ml-0 mr-0'>
				<div className='work-img position-relative overflow-hidden'>
					<img src={url} className='img-fluid' alt={name} />
					<div className='overlay-work'>
						<div className='icon text-center'>
							<a className='mfp-image' href={url} title={name}>
								<i className='mdi mdi-arrow-expand-all text-white'></i>
							</a>
						</div>
						<div className='work-content'>
							<h6 className='title mb-0'>
								<a href={url} className='text-light text-uppercase'>
									{name}
								</a>
							</h6>
							<small className='text-white-50'>{developer}</small> <br />
							<small className='text-white-50'>Technologys: {tags}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
