/* eslint-disable no-irregular-whitespace */
import React from "react";
import {Anchor, Box, Heading, Image, Paragraph, Text} from "grommet";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import Obfuscate from "react-obfuscate";

import Section from "../components/section";
import Emoji from "../components/emoji";

export async function getStaticProps() {
	let postData = null;
	const response = await axios.get("https://nourman.id/api/get-post/all");
	postData = response.data.reverse().slice(0,3).map(post => {
		//remove unnecessary payload
		delete post["body"];
		return post;
	});
	return {props: {postData}};
}

const Index = ({postData}) => {
	return (
		<>
			<Head>
				<title>Nourman Hajar</title>
			</Head>
			<Section
				background="accent-4"
				fill fullPage
				border="black"
				reversed
				left={<>
					<Heading level="1" size="large" margin={{top: "none", bottom: "medium"}} id="siteTitle">
						Nourman<br/>Hajar
					</Heading>
					<Paragraph margin={{vertical: "xsmall"}}>
						I am a Web Front-End Engineer, Linux Hobbyist, and CS Student based in
						<Text weight="bold"> Malang, Indonesia</Text>. I am currently studying at Universitas Brawijaya.
					</Paragraph>
					<Paragraph margin={{vertical: "xsmall"}}>
						I have a deep love for code, and I have a belief that the future of humanity will be built upon
						lines of <Text weight="bold">&lt;/code&gt;</Text>.
					</Paragraph>
				</>}
				right={<>
					<Box width="350px" height="350px" background="accent-3" round="full" id="siteAvatarShadow"/>
					<Image
						alignSelf="center"
						width="350px"
						fit="contain"
						src="/assets/avabackground.gif"
						id="siteAvatarBackground"
						draggable="false"
					/>
					<Text textAlign="center" color="accent-3" size="425%" id="siteAvatarText" className="serif">
						HELLO<br/>WORLD!
					</Text>
					<Image
						alignSelf="center"
						width="354px"
						fit="contain"
						src="/assets/avaoverlay.png"
						id="siteAvatar"
						draggable="false"
					/>
				</>}
			/>
			
			<Section
				background="accent-5"
				border="black"
				left={<>
					<Box alignSelf="center" justify="start" align="start" fill="vertical">
						<Heading level="2" size="medium" margin={{vertical: "xsmall"}}>
							Feel free to check out these fresh posts from <Anchor href="/blog">
							my blog!</Anchor> <Emoji symbol="📝" label="blog"/>
						</Heading>
					</Box>
				</>}
				right={<>
					<Box alignSelf="center" justify="start" align="start" fill="vertical">
						{postData.map((item, index) =>
							<Heading key={index} level="2" size="small" margin={{vertical: "xsmall"}}>
								<Link passHref href={"/blog/" + item.slug}>
									<Anchor>
										{item.title}
									</Anchor>
								</Link>
								<Text
									size="medium" margin={{top: "medium", bottom: "none"}}
									className="serif"
								>
									&nbsp;&nbsp;{item.category}
								</Text>
							</Heading>
						)}
						<Anchor href="/blog" margin={{top: "medium"}}>
							<Emoji symbol="👉" label="this"/> and more!
						</Anchor>
					</Box>
				</>}
			/>
			
			{/*Showcase*/}
			
			<Section
				background="accent-2"
				border="black"
				decor
				title={<>
					<Heading
						alignSelf="center" level="2" size="xlarge" margin={{horizontal: "large", vertical: "none"}}
						textAlign="center"
					>
						Résumé
					</Heading>
				</>}
				left={<>
					<Box alignSelf="center" justify="center" align="start" fill="vertical">
						<Text size="xlarge" margin={{top: "none"}} className="serif">
							EXPERIENCE
						</Text>
						<Paragraph color="brand" margin={{top: "xsmall", bottom: "none"}}>
							<Text weight="bold">BEM FILKOM UB<br/></Text>
						</Paragraph>
						<Paragraph margin={{vertical: "none"}}>
							<b>Vice Head of IT Department</b><br/>
							<i>Jan 2020–present</i><br/>
							<b>Software Engineer in IT Department</b><br/>
							<i>Feb 2019–Dec 2019</i>
						</Paragraph>
						<Paragraph color="brand" margin={{top: "xsmall", bottom: "none"}}>
							<Text weight="bold">Pesenkode.com<br/></Text>
						</Paragraph>
						<Paragraph margin={{top: "none"}}>
							<b>Front-End Software Engineer</b><br/>
							<i>Nov 2019–present</i>
						</Paragraph>
						
						<Text size="xlarge" margin={{top: "medium"}} className="serif">
							SKILLS
						</Text>
						<Paragraph margin={{top: "xsmall", bottom: "none"}}>
							Front-End Development<br/>
							Back-End Web Development<br/>
							JAMStack Apps Development<br/>
							Linux/UNIX Administration<br/>
							Search Engine Optimization<br/>
							Vector Design
						</Paragraph>
					</Box>
				</>}
				right={<>
					<Box alignSelf="center" justify="center" align="start" fill="vertical">
						<Text size="xlarge" margin={{top: "none"}} className="serif">
							EDUCATION
						</Text>
						<Paragraph color="brand" margin={{top: "xsmall", bottom: "none"}}>
							<Text weight="bold">Universitas Brawijaya<br/></Text>
						</Paragraph>
						<Paragraph margin={{vertical: "none"}}>
							<b>Bachelor of Information Systems</b><br/>
							<i>2018–2022 (*expected)</i>
						</Paragraph>
						<Paragraph color="brand" margin={{top: "xsmall", bottom: "none"}}>
							<Text weight="bold">SMAN 5 Semarang<br/></Text>
						</Paragraph>
						<Paragraph margin={{top: "none"}}>
							<b>Natural Sciences/IPA</b><br/>
							<i>2015–2018</i>
						</Paragraph>
						
						<Text size="xlarge" margin={{top: "medium"}} className="serif">
							TOOLS OF THE TRADE
						</Text>
						<Paragraph margin={{top: "xsmall", bottom: "none"}}>
							React.js<br/>
							Express.js/Polka<br/>
							JetBrains IDEs<br/>
							Visual Studio Code<br/>
							Arch Linux<br/>
							Figma<br/>
							Inkscape<br/>
							Microsoft Office
						</Paragraph>
					</Box>
				</>}
			/>
			
			{/*Contacts*/}
			
			<Section
				background="accent-5"
				border="black"
				centeredLeft
				left={<>
					<pre id="stars">
						·  .    ⊹     · ✺  +<br/>
						　 ˚  .   + 　 *　  　.<br/>
						*　 　 　⊹  .　　 ✺<br/>
						. .  * ·　　✵     +<br/>
							.  . 　.   ⊹   ·<br/>
						　   .  .     ✹   ·<br/>
						　·　   . 　　 ·　　  ✹
					</pre>
				</>}
				right={<>
					<Text size="medium" margin={{top: "none", bottom: "xsmall"}} className="serif">
						Got any questions?
					</Text>
					<Heading level="2" size="xlarge" margin={{top: "none", bottom: "small"}}>
						Contact me!
					</Heading>
					<Paragraph margin={{vertical: "xsmall"}}>
						I&apos;m currently looking for a remote part-time or internship at an agency. So feel free to
						drop me a line at:
					</Paragraph>
					<Paragraph margin={{vertical: "xsmall"}}>
						<b>
							<Emoji symbol="👉" label="this"/>&nbsp;
							<Obfuscate className="link" linkText="return false();" email="nourmanhajar@gmail.com"/>
						</b>
					</Paragraph>
				</>}
			/>
		</>
	);
};

export default Index;