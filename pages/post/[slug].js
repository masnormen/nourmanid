import React from "react";
import {Anchor, Box, Heading, Image, Markdown, Text} from "grommet";
import unescapeJS from "unescape-js";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import {Facebook, Linkedin, Twitter} from "grommet-icons";
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	WhatsappIcon
} from "react-share";

import Section from "../../components/section";
import Emoji from "../../components/emoji";

const BlogPost = ({postData}) => {
	return (
		<>
			<Head>
				<title>{postData.title} · Nourman Hajar</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/combine/npm/prismjs@1.20.0/themes/prism.min.css"
				/>
				<script
					src="https://cdn.jsdelivr.net/combine/npm/prismjs@1.20.0,npm/prismjs@1.20.0/components/prism-python.min.js"
					dangerouslySetInnerHTML={{__html: "if (document.querySelector('pre code')) document.addEventListener('DOMContentLoaded', (event) => Prism.highlightAll();)"}}/>
			</Head>
			<Section
				background="light-3"
				border="dark-2"
				blogPost
				title={<>
					{/*Go Back to Index Button*/}
					<Box
						background="accent-3"
						pad={{
							vertical: "small",
							horizontal: "medium"
						}}
						round="small"
						margin={{vertical: "medium"}}
					>
						<Link passHref href="/post">
							<Anchor alignSelf="center" color="black">
								&larr; I want to read more post <Emoji symbol="📝" label="blog"/>
							</Anchor>
						</Link>
					</Box>
					
					{/*Post Title*/}
					<Heading
						textAlign="center" style={{width: "100%", maxWidth: "850px", overflowWrap: "break-word"}}
						alignSelf="center" level="1" margin={{top: "medium"}}
					>
						<Link passHref href="/post/[slug]" as={`/post/${postData.slug}`}>
							<Anchor>
								{postData.title}
							</Anchor>
						</Link>
					</Heading>
					<Text size="large" textAlign="center" margin={{top: "none", bottom: "large"}}>
						Published on <b>{postData.publishedOn}</b> in <b>{postData.category}</b>
					</Text>
					
					{/*Display Image*/}
					<Image
						alignSelf="center"
						width="100%"
						fit="contain"
						src={postData.image}
						className="imageDisplay"
						margin={{bottom: "large"}}
					/>
					
					{/*Post Content*/}
					<Markdown className="markdown">
						{postData.body}
					</Markdown>
					
					{/*Like Button*/}
					<Box
						direction="row-responsive"
						background="accent-3"
						pad={{
							top: "xsmall",
							horizontal: "small"
						}}
						round="small"
						margin={{top: "large"}}
						justify="center"
						align="stretch"
						gap="small"
					>
						<Text margin={{top: "xxsmall"}} weight="bold">SHARE THIS!</Text>
						<FacebookShareButton url={`https://nourman.id/post/${postData.slug}`}>
							<Facebook size="medium" color="black"/>
						</FacebookShareButton>
						<TwitterShareButton
							url={`https://nourman.id/post/${postData.slug}`}
							title={postData.title}
						>
							<Twitter size="medium" color="black"/>
						</TwitterShareButton>
						<LinkedinShareButton url={`https://nourman.id/post/${postData.slug}`}>
							<Linkedin size="medium" color="black"/>
						</LinkedinShareButton>
						<WhatsappShareButton url={`https://nourman.id/post/${postData.slug}`}>
							<WhatsappIcon size="30px" round/>
						</WhatsappShareButton>
					</Box>
				</>}
			/>
		</>
	);
};

export async function getStaticPaths() {
	let data = await axios.get("https://nourman.id/api/get/all");
	const paths = data.data.map(post => ({
		params: {slug: post.slug},
	}));
	return {paths, fallback: false};
}

export async function getStaticProps({params}) {
	let postData = await axios.get(`https://nourman.id/api/get/${params.slug}`)
		.then(response => {
			let post = response.data[0];
			post.body = unescapeJS(post.body);
			return post;
		});
	return {
		props: {postData}
	};
}

export default BlogPost;