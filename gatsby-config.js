const path = require("path")

module.exports = {
	siteMetadata: {
		title: `John OConnell | Web Developer`,
		description:
			"John O'Connell is a Web Developer from Florida. My passion is creating beautiful websites, writing about web development and exploring all of the latest web development trends and technologies. This site is a portfolio of my work.",
		siteUrl: `https://www.jtocodes.com`,
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-remark-images",
		{
			resolve: "gatsby-plugin-react-svg",
			options: {},
		},
		{
			resolve: "gatsby-plugin-styled-components",
			optons: {},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 600,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "projects",
				path: "./src/projects/",
			},
			__key: "projects",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "steppingstones",
				path: "./src/steppingstones/",
			},
			__key: "steppingstones",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: "./src/posts/",
			},
			__key: "posts",
		},
	],
}
