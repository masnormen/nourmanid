import React from "react";
import {Anchor, Box, Heading, Image, Markdown, Paragraph, Text} from "grommet";
import unescapeJS from "unescape-js";
import axios from "axios";

import Section from "../../components/section";
import Emoji from "../../components/emoji";
import Head from "next/head";

export async function getStaticProps() {
	let postData = null;
	const response = await axios.get("https://nourman.id/api/get-post/all");
	postData = response.data.map(post => {
		post.body = unescapeJS(post.body).substr(0, 350);
		return post;
	});
	postData.reverse();
	return {props: {postData}};
}

const BlogHome = ({postData}) => {
	return (
		<>
			<Head>
				<title>Blog | Nourman Hajar</title>
			</Head>
			
			<Section
				background="accent-5"
				border="black"
				centeredLeft
				left={<>
					<Image
						alignSelf="center"
						width="375px"
						fit="contain"
						src={postData[0].image}
						className="imageDisplay"
					/>
				</>}
				right={<>
					<Text size="medium" margin={{top: "none", bottom: "xsmall"}} className="serif">
						{postData[0].category}
					</Text>
					<Heading level="2" size="medium" margin={{top: "none", bottom: "small"}}>
						<Anchor href={"/blog/" + postData[0].slug}>{postData[0].title}</Anchor>
					</Heading>
					<Paragraph margin={{vertical: "xsmall"}} className="postDesc">
						<Markdown>{postData[0].body}</Markdown>
					</Paragraph>
					<Paragraph margin={{vertical: "xsmall"}}>
						<b>
							<Anchor href={"/blog/" + postData[0].slug}>
								<Emoji symbol="👉" label="this"/> Read More...
							</Anchor>
						</b>
					</Paragraph>
				</>}
			/>
			
			<Section
				background="accent-5"
				border="black"
				centeredRight
				reversed
				left={<>
					<Text size="medium" margin={{top: "none", bottom: "xsmall"}} className="serif">
						{postData[1].category}
					</Text>
					<Heading level="2" size="medium" margin={{top: "none", bottom: "small"}}>
						<Anchor href={"/blog/" + postData[1].slug}>
							{postData[1].title}
						</Anchor>
					</Heading>
					<Paragraph margin={{vertical: "xsmall"}} className="postDesc">
						<Markdown>{postData[1].body}</Markdown>
					</Paragraph>
					<Paragraph margin={{vertical: "xsmall"}}>
						<b>
							<Anchor href={"/blog/" + postData[1].slug}>
								<Emoji symbol="👉" label="this"/> Read More...
							</Anchor>
						</b>
					</Paragraph>
				</>}
				right={<>
					<Image
						alignSelf="center"
						width="375px"
						fit="contain"
						src={postData[1].image}
						className="imageDisplay"
					/>
				</>}
			/>
			
			<Section
				background="accent-2"
				border="black"
				left={<>
					<Box alignSelf="center" justify="start" align="start" fill="vertical">
						{postData.slice(2, 4).map((item) =>
							<>
								<Text size="medium" margin={{top: "medium", bottom: "none"}} className="serif">
									{item.category}
								</Text>
								<Heading level="2" size="small" margin={{vertical: "xsmall"}}>
									<Anchor href={"/blog/" + item.slug}>
										{item.title}
									</Anchor>
								</Heading>
								<Paragraph className="postDesc" margin={{vertical: "none"}}>
									{item.body}
								</Paragraph>
							</>
						)}
					</Box>
				</>}
				right={<>
					<Box alignSelf="center" justify="start" align="start" fill="vertical">
						<Text size="medium" margin={{top: "medium", bottom: "none"}} className="serif">
							...and more:
						</Text>
						{postData.slice(4).map((item) =>
							<>
								<Heading level="2" size="small" margin={{vertical: "xsmall"}}>
									<Anchor href={"/blog/" + item.slug}>
										{item.title}
									</Anchor>
									<Text
										size="medium" margin={{top: "medium", bottom: "none"}}
										className="serif"
									>
										&nbsp;&nbsp;{item.category}
									</Text>
								</Heading>
							</>
						)}
					</Box>
				</>}
			/>
		</>
	);
};

export default BlogHome;