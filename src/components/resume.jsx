import React, { useContext } from "react";
import { ResumeContext } from "../store/contexts/ResumeContext";
import ResumeItems from "./resume-items";

const Resume = () => {
	const { works } = useContext(ResumeContext);

	const jobIteams = () => {
		return works.map((work) => {
			const { id, time, title, company, body } = work;
			return (
				<ResumeItems
					key={id}
					time={time}
					title={title}
					company={company}
					body={body}
				/>
			);
		});
	};

	return (
		<section className='section' id='resume'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center'>
						<div className='section-title'>
							<div className='titles'>
								<h4 className='title text-uppercase mb-4 pb-4'>
									Work Participation
								</h4>
								<span></span>
							</div>
							<p className='text-muted mx-auto para-desc mb-0'>
								Working with team members it's such fun and it's can't be
								expressed in the language. Here is my little contribution
								summary.
							</p>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-12'>
						<div className='main-icon text-center mt-4 pt-2'>
							<i className='pe-7s-study rounded-pill'></i>
						</div>
						<div className='timeline-page pt-4 position-relative'>
							{jobIteams()}
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
