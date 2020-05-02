import React from "react";
import {Anchor, Box, Image, Text} from "grommet";
import {useRouter} from "next/router";

import Section from "../components/section";
import Emoji from "../components/emoji";
import Link from "next/link";

const Header = (props) => {
	let location = useRouter().pathname;
	let hide = location === "/" || location === "/404";
	
	if (hide && !props.forceShow) return null;
	
	return (
		<>
			<Section
				isHeader
				id="header"
				background="accent-5"
				border="accent-2"
				className={props.className}
				title={<>
					<Box direction="row" justify="center" align="center" width="100%">
						<Box style={{position: "relative"}} className="hideOnMobile">
							<Image
								alignSelf="center"
								width="40px"
								fit="contain"
								src="/assets/avabackground.gif"
								id="siteAvatarBackground"
								draggable="false"
							/>
							<Image
								alignSelf="center"
								width="40px"
								fit="contain"
								src="/assets/avaoverlay.png"
								id="siteAvatar"
								draggable="false"
							/>
						</Box>
						<Box height="70px" margin={{horizontal: "medium", vertical: "none"}} justify="center">
							<Text
								textAlign="center" color="accent-3" size="35px" style={{textTransform: "lowercase"}}
								id="siteText" className="serif" alignSelf="center"
							>
								Nourman Hajar
							</Text>
						</Box>
						<Box
							background="accent-2" margin={{horizontal: "small", top: "xsmall"}} round="small"
							style={{textAlign: "center"}} alignSelf="center"
							pad={{vertical: "xxsmall", horizontal: "small"}} className="hideOnMobile" weight="bold"
						>
							<Link passHref href="/">
								<Anchor alignSelf="center" size="small">
									<Emoji symbol="🏠" label="home"/> Home
								</Anchor>
							</Link>
						</Box>
						<Box
							background="accent-4" margin={{horizontal: "small", top: "xsmall"}} round="small"
							style={{textAlign: "center"}} alignSelf="center"
							pad={{vertical: "xxsmall", horizontal: "small"}} className="hideOnMobile" weight="bold"
						>
							<Link passHref href="/blog">
								<Anchor alignSelf="center" size="small">
									<Emoji symbol="📝" label="blog"/> Blog
								</Anchor>
							</Link>
						</Box>
					</Box>
				</>}
			/>
		</>
	);
};

export default Header;