import React, { createContext, useState, useEffect } from "react";
import faqs from "../json/faqs.json";

export const FaqContext = createContext();

const FaqContextProvider = (props) => {
	const [allFaq, setFaqs] = useState([]);
	useEffect(() => {
		setFaqs(faqs);
	}, [allFaq]);
	return (
		<FaqContext.Provider value={{ allFaq }}>
			{props.children}
		</FaqContext.Provider>
	);
};

export default FaqContextProvider;
