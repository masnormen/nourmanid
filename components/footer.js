import React from "react";
import {Anchor, Box, Text} from "grommet";

import Section from "../components/section";
import Emoji from "../components/emoji";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<Section
				centeredRight
				centeredLeft
				height={{min: "small"}}
				background={{
					color: "accent-4",
					position: "center center",
					repeat: "no-repeat",
					size: "cover",
					image: "url(/assets/grassback.png)"
				}}
				left={<>
					<Box background="black" round="small" pad={{vertical: "xsmall", horizontal: "small"}}>
						<Text textAlign="center" size="small" weight="bold">
							<Link passHref href="/">
								<Anchor color="white">
									<Emoji symbol="🏠" label="home"/>home
								</Anchor>
							</Link>
							&nbsp;/&nbsp;
							<Link passHref href="/post">
								<Anchor color="white">
									<Emoji symbol="📝" label="posts"/>posts
								</Anchor>
							</Link>
							&nbsp;/&nbsp;
							<Link passHref href="/works">
								<Anchor color="white">
									<Emoji symbol="💻" label="works"/>works
								</Anchor>
							</Link>
							&nbsp;/&nbsp;
							<Anchor href="/#contact" color="white">
								<Emoji symbol="📞" label="contact"/>contact
							</Anchor>
						</Text>
					</Box>
				</>}
				right={<>
					<Box background="white" round="small" pad={{vertical: "xsmall", horizontal: "small"}}>
						<Text textAlign="center" size="small" weight="bold">
							© 2020. Built with&nbsp;
							<Anchor
								target="_blank" href="https://nextjs.org/"
								label="Next.js"
							/>
							&nbsp;and <Emoji symbol="❤️" label="heart"/>
						</Text>
					</Box>
				</>}
			/>
		</>
	);
	// else return null;
};

export default Footer;