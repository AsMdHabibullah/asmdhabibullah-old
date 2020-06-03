import React, { createContext, useEffect, useState } from "react";
import projects from "../json/projects.json";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
	const [allProject, setProjects] = useState([]);
	useEffect(() => {
		setProjects(projects);
	}, [allProject]);
	return (
		<ProjectContext.Provider value={{ allProject }}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectProvider;
