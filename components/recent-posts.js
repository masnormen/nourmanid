import React, {useEffect, useState} from "react";
import {Anchor, Box, Heading, Text} from "grommet";
import unescapeJS from "unescape-js";
import {Cycle} from "grommet-icons";

import Section from "../components/section";
import Emoji from "../components/emoji";

const RecentPosts = () => {
	const [postData, setPostData] = useState();
	const [isReady, setIsReady] = useState(false);
	
	useEffect(() => {
		fetch("/api/get-post/all", {
			method: "GET"
		}).then(response => {
			return response.json();
		}).then(parsedResponse => {
			let posts = parsedResponse;
			parsedResponse.map(post => {
				post.body = unescapeJS(post.body).substr(0, 350);
				return post;
			});
			posts.reverse();
			setPostData(posts.slice(0, 3));
			setIsReady(true);
		});
	}, []);
	
	if (!isReady) return (
		<Section
			background="accent-5"
			blogPost
			title={<>
				<Box margin={{top: "large"}} alignSelf="center" animation="jiggle">
					<Cycle size="large"/>
				</Box><br/>
				<Text size="large" textAlign="center">
					Fetching posts...<br/>
					Please wait for a few seconds :)
				</Text>
			</>}
		/>
	);
	return (
		<>
			{postData.map((item, index) =>
				<Heading key={index} level="2" size="small" margin={{vertical: "xsmall"}}>
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
			)}
			<Anchor href="/blog" margin={{top: "medium"}}>
				<Emoji symbol="👉" label="this"/> and more!
			</Anchor>
		</>
	);
};

export default RecentPosts;