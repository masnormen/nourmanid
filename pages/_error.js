/* eslint-disable no-irregular-whitespace */
import React from "react";
import {Anchor, Box, Heading, Image, Text} from "grommet";
import Head from "next/head";

import Section from "../components/section";
import Emoji from "../components/emoji";
import Link from "next/link";

const Error = ({statusCode}) => {
	return (
		<>
			<Head>
				<title>{statusCode} · Nourman Hajar</title>
			</Head>
			<Section
				background="accent-5"
				border="black"
				title={<>
					<Heading
						alignSelf="center" color="accent-1" level="1" size="large" textAlign="center"
						margin={{top: "none", bottom: "medium", horizontal: "medium"}}
					>
						error: {statusCode}
					</Heading>
					<Text alignSelf="center" textAlign="center" color="accent-1" size="medium" className="serif">
						What are you looking for? :(
					</Text>
				</>}
			/>
		</>
	);
};

Error.getInitialProps = ({res, err}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return {statusCode};
};

export default Error;