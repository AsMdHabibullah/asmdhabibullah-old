import React from "react";

const ResumeItems = ({ time, title, company, body }) => {
	return (
		<div className='timeline-item mb-4'>
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-sm-6'>
					<div className='duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left'>
						{time}
					</div>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-6'>
					<div className='event event-description-right rounded p-4 border float-left text-left'>
						<h4 className='title mb-0 text-capitalize'>{title}</h4>
						<small className='company'>{company}</small>
						<p className='timeline-subtitle mt-3 mb-0 text-muted'>{body}</p>
					</div>
				</div>
			</div>
		</div>
	);
	// if (state == 0) {

	// } else {
	// 	return (
	// 		<div className='timeline-item mb-4'>
	// 			<div className='row'>
	// 				<div className='col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2'>
	// 					<div className='event event-description-left rounded p-4 border float-left text-right'>
	// 						<h4 className='title mb-0 text-capitalize'>{title}</h4>
	// 						<small className='company'>{company}</small>
	// 						<p className='timeline-subtitle mt-3 mb-0 text-muted'>{body}</p>
	// 					</div>
	// 				</div>
	// 				<div className='col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1'>
	// 					<div className='duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left'>
	// 						{time}
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }
};

export default ResumeItems;
