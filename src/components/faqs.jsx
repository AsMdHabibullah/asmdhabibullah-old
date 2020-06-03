import React, { createRef, useState } from "react";


const FaqItems = ({ faq, children }) => {
	const faqRefs = createRef();
	const [faqCls, setFaqCls] = useState(false);
	const [faqHeight, setFaqHeight] = useState(0);

	const setHeightHendeler = (e) => {
		e.preventDefault();
		setFaqCls(!faqCls);
		const currentHeight = faqRefs.current.clientHeight;
		setFaqHeight(currentHeight);
	};
	const toggleHeight = faqCls ? faqHeight : 0;

	return (
		<div className='col-lg-12 col-md-12 col-12'>
			<div className='tab-content pl-lg-4' id='pills-tabContent'>
				<div
					className='tab-pane fade show active'
					id='pills-cloud'
					role='tabpanel'
					aria-labelledby='pills-cloud-tab'
				>
					<div className='progress-box p-1'>
						<h6
							className='title text-muted question'
							onClick={(e) => setHeightHendeler(e)}
						>
							<i
								className={`mr-2 ${
									faqCls ? "fa fa-arrow-down" : "fa fa-arrow-right"
								}`}
							/>
							{faq} ?
						</h6>
						<div
							className={`answer ${faqCls ? "answershow" : ""}`}
							style={{ height: toggleHeight + "px" }}
						>
							<p className="p-2" ref={faqRefs}>{children}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqItems;
