import React from "react";
import {Anchor, Box, Text} from "grommet";
import { useRouter } from "next/router";

import Section from "../components/section";
import Emoji from "../components/emoji";

const Header = () => {
	let location = useRouter().pathname;
	let isHome = false, isBlog = true, isWork = false;

	if (location === "/") isHome = true;
	else if (location.startsWith("/work")) isWork = true;
	else if (location.startsWith("/blog")) isBlog = true;

	if (isHome) return null;
	
	return (
		<>
			<Section
				isHeader
				id="header"
				background={{
					color: "accent-4",
					position: "center",
					repeat: "no-repeat",
					size: "cover",
					image: "url(/assets/grassback.png)"
				}}
				border="accent-3"
				title={<>
					<Box
						background="black" margin={{horizontal: "xlarge", vertical: "none"}} round="small" style={{textAlign: "center"}}
						pad={{vertical: "xsmall", horizontal: "small"}} className="hideOnMobile" weight="bold"
					>
						<Anchor alignSelf="center" href="/">
							<Emoji symbol="🏠" label="home"/> Go to home
						</Anchor>
					</Box>
					<Box height="125px" margin={{horizontal: "medium", vertical: "none"}}>
						<Text
							textAlign="center" color="accent-3" size="200%" id="siteAvatarText"
							className="serif blog"
							style={{textTransform: "lowercase"}}
						>
							{isBlog && <>Nourman<br/>Hajar</>}
							{isWork && <>Works<br/>and<br/>Portfolio</>}
						</Text>
					</Box>
					<Box
						background="black" margin={{horizontal: "xlarge", vertical: "none"}} round="small" align="center"
						style={{textAlign: "center"}} className="hideOnMobile"
						pad={{vertical: "xsmall", horizontal: "small"}}
					>
						<Text weight="bold">
							{isBlog && <>My Little Blog</>}
							{isWork && <>My Portfolio</>}
						</Text>
					</Box>
				</>}
			/>
		</>
	);
};

export default Header;