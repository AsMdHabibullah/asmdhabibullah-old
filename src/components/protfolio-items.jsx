import React from "react";

const ProtfolioItems = () => {
	return (
		<figure className='portfolio-item one-four appleIOS isotope-item effect-oscar'>
			<div className='portfolio_img'>
				<img src='images/portfolio_pic1.jpg' alt='Portfolio 1' />{" "}
			</div>
			<figcaption>
				<div>
					<a href='images/portfolio_pic1.jpg' className='fancybox'>
						<h2>
							Warm <span>Oscar</span>
						</h2>
						<p>
							Oscar is a decent man. He used to clean porches with pleasure.
						</p>
					</a>
				</div>
			</figcaption>
		</figure>
	);
};

export default ProtfolioItems;
