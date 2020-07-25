/* eslint-disable no-irregular-whitespace */
import React from "react";
import {Heading, Text} from "grommet";
import Head from "next/head";

import Section from "../components/section";

const Error = () => {
	return (
		<>
			<Head>
				<title>404 · Nourman Hajar</title>
			</Head>
			<Section
				background="accent-5"
				border="black"
				title={<>
					<Heading
						alignSelf="center" color="accent-1" level="1" size="large" textAlign="center"
						margin={{top: "none", bottom: "medium", horizontal: "medium"}}
					>
						error: 404
					</Heading>
					<Text alignSelf="center" textAlign="center" color="accent-1" size="medium" className="serif">
						What are you looking for? :(
					</Text>
				</>}
			/>
		</>
	);
};

export default Error;