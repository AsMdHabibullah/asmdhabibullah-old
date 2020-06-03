import React from "react";

const HappyClient = () => {
	return (
		<section className='section-two'>
			<div className='bg-overlay'></div>
			<div className='container'>
				<div className='row' id='counter'>
					<div className='col-lg-6 col-md-6 col-6'>
						<div className='counter-box rounded text-center'>
							<div className='counter-icon'>
								<i className='mdi mdi-emoticon-happy-outline text-custom'></i>
							</div>
							<h5 className='counter-head mt-3 text-white'>Happy Client</h5>
							<h2 className='counter-value mb-0 text-white' data-count='1251'>
								10
							</h2>
						</div>
					</div>

					{/* <div className='col-lg-3 col-6'>
						<div className='counter-box rounded text-center'>
							<div className='counter-icon'>
								<i className='mdi mdi-trophy-award text-custom'></i>
							</div>
							<h5 className='counter-head mt-3 text-white'>Award Won</h5>
							<h2 className='counter-value mb-0 text-white' data-count='15'>
								1
							</h2>
						</div>
					</div> */}

					{/* <div className='col-lg-3 col-6 mt-4 pt-2 mt-lg-0 pt-lg-0'>
						<div className='counter-box rounded text-center'>
							<div className='counter-icon'>
								<i className='mdi mdi-coffee-outline text-custom'></i>
							</div>
							<h5 className='counter-head mt-3 text-white'>Cup of Coffee</h5>
							<h2 className='counter-value mb-0 text-white' data-count='3261'>
								30
							</h2>
						</div>
					</div> */}

					<div className='col-lg-6 col-md-6 col-6'>
						<div className='counter-box rounded text-center'>
							<div className='counter-icon'>
								<i className='mdi mdi-monitor text-custom'></i>
							</div>
							<h5 className='counter-head mt-3 text-white'>
								Project Completed
							</h5>
							<h2 className='counter-value mb-0 text-white' data-count='10'>
								10
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HappyClient;
