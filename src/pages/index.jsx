import React from "react";
import LayoutPage from "../layout";
import HeroSection from "../components/hero";
import AboutMe from "../components/about";
import Services from "../components/services";
import HappyClient from "../components/happy-client";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Protfolio from "../components/protfolio";
import ClaientReviews from "../components/reviews";
import Contact from "../components/contact";
import FaqContextProvider from "../store/contexts/FaqContext";
import ServicesProvider from "../store/contexts/ServicesContext";
import ResumeProvider from "../store/contexts/ResumeContext";
import ProjectProvider from "../store/contexts/ProjectContext";
import ReviewsProvider from "../store/contexts/ReviewsContext";


const IndexPage = () => {
	return (
			<LayoutPage>
				<HeroSection />
				<AboutMe />
				<ServicesProvider>
					<Services />
				</ServicesProvider>
				<HappyClient />
				<ResumeProvider>
					<Resume />
				</ResumeProvider>
				<FaqContextProvider>
					<Skills />
				</FaqContextProvider>
				<ProjectProvider>
					<Protfolio />
				</ProjectProvider>
				<ReviewsProvider>
					<ClaientReviews />
				</ReviewsProvider>
				<Contact />
			</LayoutPage>
	);
};

export default IndexPage;
