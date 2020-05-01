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
				<title>{statusCode} | Nourman Hajar</title>
			</Head>
			<Section
				background="accent-4"
				fill fullPage
				border="black"
				left={<>
					<Box
						width="350px"
						height="350px"
						background="accent-3"
						round="full"
						id="siteAvatarShadow"
					/>
					<Image
						alignSelf="center"
						width="350px"
						fit="contain"
						src="/assets/avabackground.gif"
						id="siteAvatarBackground"
						draggable="false"
					/>
					<Text textAlign="center" color="accent-3" size="120px" id="siteAvatarText" className="serif">
						{statusCode}
					</Text>
				</>}
				right={<>
					<Heading
						alignSelf="center" color="accent-1" level="1" size="xlarge"
						margin={{top: "none", bottom: "medium"}}
					>
						Error :(
					</Heading>
					<Link passHref href="/">
						<Anchor alignSelf="center">
							&larr; Back to the homepage <Emoji symbol="🏠" label="home"/>
						</Anchor>
					</Link>
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