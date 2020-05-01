/* eslint-disable react/prop-types */
import React from "react";
import {Box} from "grommet";

const Section = (props) => {
	return (
		<Box
			width={props.width}
			height={props.height}
			background={props.background || "white"}
			direction="column"
			align="center"
			alignContent="center"
			justify="center"
			pad={props.blogPost ? "medium" : props.isHeader ? "xsmall" : "xlarge"}
			border={props.border ? {
				side: props.isHeader ? "top" : "bottom",
				size: "medium",
				color: props.border
			} : false}
			fill={props.fill ? true : "horizontal"}
			style={props.fullPage && {minHeight: "100vh"}}
			className={props.className}
			id={props.id}
		>
			{props.title && (
				<Box
					alignSelf="center"
					style={{position: "relative"}}
					margin={props.decor && {bottom: "xlarge", top: "none"}}
					pad={props.blogPost
						? {horizontal: "none", top: "none", bottom: "xlarge"}
						: {horizontal: "large", vertical: "none"}}
					align="center"
					justify="around"
					direction={props.blogPost ? "column" : "row-responsive"}
				>
					{props.decor && (
						<Box alignSelf="center" background="brand" height="5px" width={{min: "100%"}}/>
					)}
					{props.title}
					{props.decor && (
						<Box alignSelf="center" background="brand" height="5px" width={{min: "100%"}}/>
					)}
				</Box>
			)}
			{(props.left || props.right) && (
				<Box
					margin="none"
					direction="row-responsive"
					gap="xlarge"
					className={props.reversed ? "reverse-section" : "section"}
				>
					<Box
						align={props.centeredLeft ? "center" : "start"}
						justify="center"
						alignSelf="center"
						width="medium"
						style={{position: "relative"}}
						background={props.display ? "black" : undefined}
						round="small"
					>
						{props.left}
					</Box>
					<Box
						align={props.centeredRight ? "center" : "start"}
						justify="center"
						alignSelf="center"
						width="medium"
						style={{position: "relative"}}
					>
						{props.right}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Section;