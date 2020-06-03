import React from "react";

const ServicesItem = ({ title, body }) => {
	return (
		<div className='col-lg-4 col-md-6 col-12 mt-4 pt-2 '>
			<div className='service-wrapper rounded position-relative text-center border p-4 pt-5 pb-5'>
				<div className='icon text-custom'>
					<i className='mdi mdi-leaf-maple text-custom'></i>
				</div>
				<div className='content mt-3'>
					<h4 className='title text-uppercase'>{title}</h4>
					<p className='text-muted mt-3 mb-0'>{body}</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesItem;
