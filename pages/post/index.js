import React from "react";
import {Anchor, Box, Heading, Image, Markdown, Paragraph, Text} from "grommet";
import unescapeJS from "unescape-js";
import axios from "axios";

import Section from "../../components/section";
import Emoji from "../../components/emoji";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
	let postData = null;
	const response = await axios.get("https://nourman.id/api/get/all");
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
				<title>Posts · Nourman Hajar</title>
			</Head>
			
			<Section
				background="accent-2"
				border="dark-2"
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
						<Link passHref href="/post/[slug]" as={`/post/${postData[0].slug}`}>
							<Anchor>{postData[0].title}</Anchor>
						</Link>
					</Heading>
					<Paragraph margin={{vertical: "xsmall"}} className="postDesc">
						<Markdown>{postData[0].body}</Markdown>
					</Paragraph>
					<Paragraph margin={{vertical: "xsmall"}}>
						<b>
							<Link passHref href="/post/[slug]" as={`/post/${postData[0].slug}`}>
								<Anchor><Emoji symbol="👉" label="this"/> Read More...</Anchor>
							</Link>
						</b>
					</Paragraph>
				</>}
			/>
			
			<Section
				background="accent-5"
				border="dark-2"
				centeredRight
				reversed
				left={<>
					<Text size="medium" margin={{top: "none", bottom: "xsmall"}} className="serif">
						{postData[1].category}
					</Text>
					<Heading level="2" size="medium" margin={{top: "none", bottom: "small"}}>
						<Link passHref href="/post/[slug]" as={`/post/${postData[1].slug}`}>
							<Anchor>{postData[1].title}</Anchor>
						</Link>
					</Heading>
					<Paragraph margin={{vertical: "xsmall"}} className="postDesc">
						<Markdown>{postData[1].body}</Markdown>
					</Paragraph>
					<Paragraph margin={{vertical: "xsmall"}}>
						<b>
							<Link passHref href="/post/[slug]" as={`/post/${postData[1].slug}`}>
								<Anchor><Emoji symbol="👉" label="this"/> Read More...</Anchor>
							</Link>
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
				border="dark-2"
				left={<>
					<Box alignSelf="center" justify="start" align="start" fill="vertical">
						{postData.slice(2, 4).map((item) =>
							<>
								<Text size="medium" margin={{top: "medium", bottom: "none"}} className="serif">
									{item.category}
								</Text>
								<Heading level="2" size="small" margin={{vertical: "xsmall"}}>
									<Link passHref href="/post/[slug]" as={`/post/${item.slug}`}>
										<Anchor>{item.title}</Anchor>
									</Link>
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
									<Link passHref href="/post/[slug]" as={`/post/${item.slug}`}>
										<Anchor>{item.title}</Anchor>
									</Link>
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