import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import NavBer from "../components/navber";
import Footer from "../components/footer";
import PreLoader from "../hoc/PreLoader";


const LayoutPage = ({ children }) => {
	const [chields, setChield] = useState(null)
	const [loading, setLoading] = useState(false);
	const fatcheData = async () => {
		setChield(await children);
		setLoading(!loading);
	}
	useEffect(() => {
		fatcheData();
	}, []);
	return (
		<Fragment>
			<Head>
				<meta charSet='UTF-8' />
				<title>
					Web Developer (REMOTE) - JavaScript | React.Js | Next.Js | Python | Django.
				</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='Personal profile website' />
				<meta name='author' content='As Md Habibullah' />
				<link href="images/favicon.png" type="image/x-icon" rel="shortcut icon" />>
				<link href='css/font-awesome.css' rel='stylesheet' />
				<link href='css/bootstrap.css' rel='stylesheet' />
				<link href='css/magnific-popup.css' rel='stylesheet' />
				<link href='css/owl.carousel.css' rel="stylesheet" />
				<link href='css/owl.transitions.css' rel="stylesheet" />
				<link href="css/slider.css" rel="stylesheet" />
				<link href='css/owl.theme.css' rel='stylesheet' />
				<link href='css/style.css' rel='stylesheet' />
				<link href='css/mycss.css' rel='stylesheet' />
				<link href='css/preloader.css' rel='stylesheet' />
				<link href='css/colors/default.css' rel='stylesheet' />
			</Head>
			<NavBer />
			{loading ? chields : <PreLoader />}
			<Footer />
		</Fragment>
	);
};

export default LayoutPage;
