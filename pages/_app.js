import React from "react";
import {Grommet} from "grommet";
import {deepMerge} from "grommet/utils";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import {grommet} from "grommet/themes";
import {siteTheme} from "../styles/siteTheme";
import "normalize.css";
import "../styles/global.css";

import Header from "../components/header";
import Footer from "../components/footer";

const normenTheme = deepMerge(grommet, siteTheme);

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
	if (typeof document !== "undefined") document.getElementById("grommetParent").scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
	NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

if (typeof window !== "undefined") {
	const WebFont = require("webfontloader");
	WebFont.load({
		google: {
			families: [
				"Barlow Semi Condensed:300",
				"DM Serif Display",
				"Nanum Gothic Coding&display=swap",
			]
		}
	});
}

// eslint-disable-next-line react/prop-types
const App = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=EDGE"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#061329"/>
				<meta name="apple-mobile-web-app-title" content="Nourman Hajar"/>
				<meta name="application-name" content="Nourman Hajar"/>
				<meta name="msapplication-TileColor" content="#ffc40d"/>
				<meta name="theme-color" content="#061329"/>
				
			</Head>
			<Grommet theme={normenTheme} id="grommetParent" full>
				<Header/>
				<Component {...pageProps} />
				<Footer/>
			</Grommet>
		</>
	);
};

export default App;