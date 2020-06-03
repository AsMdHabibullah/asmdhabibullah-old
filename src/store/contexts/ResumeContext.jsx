import { createContext, useState, useEffect } from "react";
import resume from "../json/resume.json";

export const ResumeContext = createContext();
const ResumeProvider = (props) => {
	const [works, setWorks] = useState([]);
	useEffect(() => {
		setWorks(resume);
	}, [works]);
	return (
		<ResumeContext.Provider value={{ works }}>
			{props.children}
		</ResumeContext.Provider>
	);
};

export default ResumeProvider;
