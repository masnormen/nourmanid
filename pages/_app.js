import React from "react";
import {Grommet} from "grommet";
import {deepMerge} from "grommet/utils";

import {grommet} from "grommet/themes";
import {siteTheme} from "../styles/siteTheme";
import "normalize.css";
import "../styles/global.css";

import Header from "../components/header";
import Footer from "../components/footer";

const normenTheme = deepMerge(grommet, siteTheme);

if (typeof window !== "undefined") {
	const WebFont = require("webfontloader");
	WebFont.load({
		google: {
			families: [
				"Fira Sans Condensed:300",
				"DM Serif Display",
				"Nanum Gothic Coding&display=swap",
			]
		}
	});
}

// eslint-disable-next-line react/prop-types
const MyApp = ({Component, pageProps}) => (
	<>
		<Grommet theme={normenTheme} id="grommetParent" full>
			<Header/>
			<Component {...pageProps} />
			<Footer/>
		</Grommet>
	</>
);

export default MyApp;