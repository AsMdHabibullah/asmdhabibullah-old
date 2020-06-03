import React, { createContext, useState, useEffect } from "react";
import reviews from "../json/reviews.json";

export const ReviewsContext = createContext();
const ReviewsProvider = ({ children }) => {
	const [allReview, setReviews] = useState([]);
	useEffect(() => {
		setReviews(reviews);
	});
	return (
		<ReviewsContext.Provider value={{ allReview }}>
			{children}
		</ReviewsContext.Provider>
	);
};

export default ReviewsProvider;
