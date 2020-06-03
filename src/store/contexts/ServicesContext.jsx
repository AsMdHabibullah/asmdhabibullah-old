import React, { createContext, useEffect, useState } from "react";
import services from "../json/services.json";

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
	const [servicesItem, setServices] = useState([]);
	useEffect(() => {
		setServices(services);
	}, [servicesItem]);

	return (
		<ServicesContext.Provider value={{ servicesItem }}>
			{children}
		</ServicesContext.Provider>
	);
};

export default ServicesProvider;
