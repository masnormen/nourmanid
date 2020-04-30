import React from "react";
import {Anchor, Box, Image, Text} from "grommet";

import Section from "../components/section";
import Emoji from "../components/emoji";
// import {useLocation} from "react-router";

const Header = () => {
	// let location = useLocation().pathname;
	let isHome = false, isBlog = true, isWork = false, is404 = false;
	//
	// if (location === "/") isHome = true;
	// else if (location.startsWith("/work")) isWork = true;
	// else if (location.startsWith("/blog")) isBlog = true;
	// else is404 = true;
	//
	// if (is404 || isHome) return null;
	
	return (
		<>
			<Section
				isHeader
				id="header"
				background={{
					"color": "accent-4",
					"position": "center bottom",
					"repeat": "no-repeat",
					"size": "cover",
					"image": "url(/assets/grassback.png)"
				}}
				border="black"
				title={<>
					<Box
						background="black" margin="large" round="small" align="center"
						style={{textAlign: "center"}} className="hideOnMobile"
						pad={{vertical: "xsmall", horizontal: "small"}}
					>
						{isBlog && <>Nourman Hajar</>}
						{isWork && <>My Portfolio</>}
					</Box>
					<Box style={{position: "relative"}}>
						<Box width="200px" height="200px" background="accent-3" round="full" id="siteAvatarShadow"/>
						<Image
							alignSelf="center"
							width="200px"
							fit="contain"
							src="/assets/avabackground.gif"
							id="siteAvatarBackground"
							draggable="false"
						/>
						<Text
							textAlign="center" color="accent-3" size="200%" id="siteAvatarText"
							className="serif blog"
							style={{textTransform: "uppercase"}}
						>
							{isBlog && <>Dumb<br/>Brain<br/>Dump</>}
							{isWork && <>Works<br/>and<br/>Portfolio</>}
						</Text>
					</Box>
					<Box
						background="black" margin="large" round="small" style={{textAlign: "center"}}
						pad={{vertical: "xsmall", horizontal: "small"}}
					>
						<Anchor alignSelf="center" href="/">
							Go to home <Emoji symbol="🏠" label="home"/>
						</Anchor>
					</Box>
				</>}
			/>
		</>
	);
};

export default Header;