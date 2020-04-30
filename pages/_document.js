import Document, {Head, Main, NextScript} from "next/document";
import React from "react";
import {Grommet} from "grommet";
import {grommet} from "grommet/themes";
import {siteTheme} from "../styles/siteTheme";
import {deepMerge} from "grommet/utils";
import {ServerStyleSheet} from "styled-components";

const normenTheme = deepMerge(grommet, siteTheme);

class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<html lang="en">
				<Head/>
				<body>
					<Main/>
					<NextScript/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300%7CDM+Serif+Display%7CNanum+Gothic+Coding&amp;display=swap"
					/>
					<link
						rel="stylesheet"
						href="/assets/fonts.css"
					/>
				</body>
			</html>
		);
	}
}

export default CustomDocument;