import React, { useContext } from "react";
import { ReviewsContext } from "../store/contexts/ReviewsContext";
import SingleReviews from "./single-reviews";

const ClaientReviews = () => {
	const { allReview } = useContext(ReviewsContext);
	const reviewsRender = () => {
		return allReview.map((review) => {
			const {
				id,
				project_name,
				client_name,
				client_img,
				country,
				sayes,
			} = review;

			return (
				<SingleReviews
					key={id}
					project_name={project_name}
					client_name={client_name}
					client_img={client_img}
					country={country}
					sayes={sayes}
				/>
			);
		});
	};
	return (
		<section className='section bg-light'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center'>
						<div className='section-title'>
							<div className='titles'>
								<h4 className='title text-uppercase mb-4 pb-4'>Client says</h4>
								<span></span>
							</div>
							<p className='text-muted mx-auto para-desc mb-0'>
								Local and freelancing site clients say about my work. Thank you
								so much for reviewing my works.
							</p>
						</div>
					</div>
				</div>

				<div className='row justify-content-center'>
					{reviewsRender()}
				</div>
				<div className='owl-controls clickable'>
					<div className='owl-pagination'>
						<div className='owl-page'>
							<span className=''></span>
						</div>
						<div className='owl-page active'>
							<span className=''></span>
						</div>
						<div className='owl-page'>
							<span className=''></span>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
};

export default ClaientReviews;
