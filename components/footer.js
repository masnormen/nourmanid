import React from "react";
import {Anchor, Box, Text} from "grommet";

import Section from "../components/section";
import Emoji from "../components/emoji";

const Footer = () => {
	// let location = useLocation();
	// if (location.pathname !== "/404")
	return (
		<>
			<Section
				centeredRight
				centeredLeft
				height="medium"
				background={{
					color: "accent-4",
					position: "center bottom",
					repeat: "no-repeat",
					size: "cover",
					image: "url(/assets/grassback.png)"
				}}
				left={<>
					<Box background="black" round="small" pad={{vertical: "xsmall", horizontal: "small"}}>
						<Text textAlign="center" size="small" weight="bold">
							<Anchor color="white" href="/">
								<Emoji symbol="🏠" label="home"/>home
							</Anchor>
							&nbsp;/&nbsp;
							<Anchor color="white" href="/blog">
								<Emoji symbol="📝" label="blog"/>blog
							</Anchor>
							&nbsp;/&nbsp;
							<Anchor color="white" href="/works">
								<Emoji symbol="💻" label="works"/>works
							</Anchor>
							&nbsp;/&nbsp;
							<Anchor color="white" href="/contact">
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
								target="_blank" href="https://reactjs.org/"
								label="React.js"
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