import React from "react";
import {Anchor, Box, Heading, Image, Markdown, Text} from "grommet";
import unescapeJS from "unescape-js";
import axios from "axios";
import Head from "next/head";

import Section from "../../components/section";
import Emoji from "../../components/emoji";
import Link from "next/link";
//
// export async function getServerSideProps() {
// 	const slug = useRouter().pathname;
// 	let postData = null;
// 	const response = await axios.get(`https://nourman.id/api/get-post/${slug}`);
// 	postData = response.data.map(post => {
// 		//remove unnecessary payload
// 		delete post["body"];
// 		return post;
// 	}).slice(0, 3);
// 	postData.reverse();
// 	return {props: {postData}};
// }

const BlogPost = ({postData}) => {
	return (
		<>
			<Head>
				<title>{postData.title}</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/combine/npm/prismjs@1.20.0/themes/prism.min.css"
				/>
				<script
					src="https://cdn.jsdelivr.net/combine/npm/prismjs@1.20.0,npm/prismjs@1.20.0/components/prism-python.min.js"
					dangerouslySetInnerHTML={{__html: "if (document.querySelector('pre code')) document.addEventListener('DOMContentLoaded', (event) => Prism.highlightAll();)"}}/>
			</Head>
			<Section
				background="accent-5"
				border="black"
				blogPost
				title={<>
					{/*Go Back to Index Button*/}
					<Box
						background="accent-4"
						pad={{
							vertical: "small",
							horizontal: "medium"
						}}
						round="small"
						margin={{vertical: "medium"}}
					>
						<Link passHref href="/blog">
							<Anchor alignSelf="center">
								&larr; I want to read more post <Emoji symbol="📝" label="blog"/>
							</Anchor>
						</Link>
					</Box>
					
					{/*Post Title*/}
					<Heading
						textAlign="center" style={{width: "100%", maxWidth: "850px", overflowWrap: "break-word"}}
						alignSelf="center" level="1" margin={{top: "medium"}}
					>
						<Link passHref href="/blog/[slug]" as={`/blog/${postData.slug}`}>
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
						background="accent-3"
						alignSelf="center"
						pad={{
							vertical: "small",
							horizontal: "medium"
						}}
						round="small"
						border={{
							side: "all",
							size: "medium",
							color: "accent-2"
						}}
						margin={{top: "large"}}
					>
						<Anchor
							alignSelf="center"
							onClick={() => {
								// if (isLiked === 1) setIsLiked(-1);
								// else setIsLiked(1);
							}}
						>
							I LIKE THIS! <Emoji symbol="👍" label="like"/>
						</Anchor>
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