import React, { useContext } from "react";
import { ServicesContext } from "../store/contexts/ServicesContext";
import ServicesItem from "./service-item";

const Services = () => {
	const { servicesItem } = useContext(ServicesContext);

	const serviceRender = () => {
		return servicesItem.map((services) => {
			const { id, title, body } = services;
			return <ServicesItem key={id} title={title} body={body} />;
		});
	};
	return (
		<section className='section bg-light' id='services'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center'>
						<div className='section-title'>
							<div className='titles'>
								<h4 className='title text-uppercase mb-4 pb-4'>
									What I Offer ?
								</h4>
								<span></span>
							</div>
							<p className='text-muted mx-auto para-desc mb-0'>
								In the below section, you can see my expertise department in
								which I can assist you with.
							</p>
						</div>
					</div>
				</div>

				<div className='row'>{serviceRender()}</div>
			</div>
		</section>
	);
};

export default Services;
