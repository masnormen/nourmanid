import React from "react";
import {Anchor, Box, Image, Text} from "grommet";
import {useRouter} from "next/router";

import Section from "../components/section";
import Emoji from "../components/emoji";
import Link from "next/link";

const Header = (props) => {
	let location = useRouter().pathname;
	let hide = location === "/";
	
	if (hide && !props.forceShow) return null;
	
	return (
		<>
			<Section
				isHeader
				id="header"
				background="light-3"
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
						<Box height="70px" margin={{horizontal: "medium", vertical: "none"}} justify="center" className="hideOnMobile">
							<Text
								textAlign="center" color="accent-3" size="32px" style={{textTransform: "lowercase"}}
								id="siteText" className="serif" alignSelf="center"
							>
								Nourman Hajar
							</Text>
						</Box>
						<Box
							background="accent-2" margin={{horizontal: "small", top: "xsmall", bottom: "xsmall"}} round="small"
							style={{textAlign: "center"}} alignSelf="center"
							pad={{vertical: "xxsmall", horizontal: "small"}} weight="bold"
						>
							<Link passHref href="/">
								<Anchor alignSelf="center" size="medium">
									<Emoji symbol="🏠" label="home"/> Home
								</Anchor>
							</Link>
						</Box>
						<Box
							background="accent-4" margin={{horizontal: "small", top: "xsmall", bottom: "xsmall"}} round="small"
							style={{textAlign: "center"}} alignSelf="center"
							pad={{vertical: "xxsmall", horizontal: "small"}} weight="bold"
						>
							<Link passHref href="/post">
								<Anchor alignSelf="center" size="medium">
									<Emoji symbol="📝" label="posts"/> Posts
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