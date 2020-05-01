import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";
import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});
			
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
			};
		} finally {
			sheet.seal();
		}
	}
	
	render() {
		Router.onRouteChangeStart = () => NProgress.start();
		Router.onRouteChangeComplete = () => NProgress.done();
		Router.onRouteChangeError = () => NProgress.done();
		return (
			<Html lang="en">
				<Head/>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}