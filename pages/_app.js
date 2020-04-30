import React from "react";
import {Grommet} from "grommet";
import {deepMerge} from "grommet/utils";
// import WebFont from "webfontloader";
import App from "next/app";

import "normalize.css";
import "../styles/global.css";

import Header from "../components/header";
import Footer from "../components/footer";
import {grommet} from "grommet/themes";
import {siteTheme} from "../styles/siteTheme";

const normenTheme = deepMerge(grommet, siteTheme);


// WebFont.load({
// 	google: {
// 		families: [
// 			"Fira Sans Condensed:300",
// 			"DM Serif Display",
// 			"Nanum Gothic Coding&display=swap",
// 		]
// 	},
// 	custom: {
// 		families: ["Butler ExtraBold"],
// 		urls: ["/styles/fonts.css"]
// 	}
// });

// eslint-disable-next-line react/prop-types
const MyApp = ({Component, pageProps}) => (
	<>
		<Grommet theme={normenTheme} full>
			<Header/>
			<Component {...pageProps} />
			<Footer/>
		</Grommet>
	</>
);

export default MyApp;