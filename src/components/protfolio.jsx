import React, { useContext } from "react";
import { ProjectContext } from "../store/contexts/ProjectContext";
import SingleProject from "./single-project";

const Protfolio = () => {
	const { allProject } = useContext(ProjectContext);
	const projectRender = () => {
		return allProject.map((project) => {
			const { id, name, url, tags, developer } = project;
			return (
				<SingleProject
					key={id}
					name={name}
					url={url}
					tags={tags}
					developer={developer}
				/>
			);
		});
	};
	return (
		<section className='section' id='projects'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center'>
						<div className='section-title'>
							<div className='titles'>
								<h4 className='title text-uppercase mb-4 pb-4'>My Portfolio</h4>
								<span></span>
							</div>
							<p className='text-muted mx-auto para-desc mb-0'>
								Compleated projects sample here.
							</p>
						</div>
					</div>
				</div>

				<div className='row justify-content-center mt-4 pt-2'>
					<div className='col-12 text-center'>
						<ul
							className='col container-filter portfolioFilter list-unstyled mb-0 text-center'
							id='filter'
						>
							<li className='list-inline-item'>
								<a
									className='categories rounded pl-3 pr-3 mb-2 active'
									data-filter='*'
								>
									All
								</a>
							</li>
							<li className='list-inline-item'>
								<a
									className='categories rounded pl-3 pr-3 mb-2'
									data-filter='.web'
								>
									Ux / Ui
								</a>
							</li>
							<li className='list-inline-item'>
								<a
									className='categories rounded pl-3 pr-3 mb-2'
									data-filter='.brand'
								>
									Wed Design
								</a>
							</li>
							<li className='list-inline-item'>
								<a
									className='categories rounded pl-3 pr-3 mb-2'
									data-filter='.studio'
								>
									Wed Development
								</a>
							</li>
							<li className='list-inline-item'>
								<a
									className='categories rounded pl-3 pr-3 mb-2'
									data-filter='.graphic'
								>
									Software Development
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='portfolioContainer row pt-2 mt-4'>
					{projectRender()}
				</div>
				<div className='row justify-content-center mt-4 pt-2'>
					<div className='col-12 text-center'>
						<a href='/' className='btn btn-pill btn-custom'>
							See more <i className='mdi mdi-chevron-right'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Protfolio;
