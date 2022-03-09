import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../styles/Layout"
import styled from "styled-components"
import ProjectHeader from "../components/ProjectDetailComponents/ProjectHeader"
import ProjectSection from "../components/ProjectDetailComponents/ProjectSection"
import BlogPostContainer from "../components/BlogPosts/BlogPostContainer"
import LessonsLearned from "../components/ProjectDetailComponents/LessonsLearned"
import ImgContainer from "../components/ProjectDetailComponents/ImgContainer"
import SubContainer from "../components/SubContainer"
import TextContent from "../components/TextContent"

const BlogTextContent = styled(TextContent)`
	margin: 0 auto;
	max-width: 1024px;
	width: 100%;
	padding: 1.5rem;
`
const BlogContainer = styled(SubContainer)`
	margin: 0 auto;
	max-width: 1024px;
	width: 100%;
	padding: 1.5rem;
`

const TD = (props) => <td style={{ paddingRight: "2em" }} {...props} />

const TR = (props) => <tr style={{ textAlign: "left" }} {...props} />

const Table = (props) => (
	<table style={{ paddingBottom: "1em", paddingTop: "1em" }} {...props} />
)

const TH = (props) => (
	<th style={{ paddingBottom: "1em", textTransform: "uppercase" }} {...props} />
)

const components = {
	wrapper: BlogPostContainer,
	td: TD,
	tr: TR,
	th: TH,
	table: Table,
}

const shortcodes = {
	ProjectHeader,
	ProjectSection,
	BlogPostContainer,
	LessonsLearned,
	ImgContainer,
	BlogTextContent,
	TextContent,
	BlogContainer,
}

const BlogPostTemplate = ({ data, location }) => {
	const post = data.file.childMdx
	const postData = post.frontmatter

	console.log(postData)
	// const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout>
			<BlogContainer>
				<MDXProvider components={components}>
					<MDXProvider components={shortcodes}>
						<MDXRenderer frontmatter={postData}>{post.body}</MDXRenderer>
					</MDXProvider>
				</MDXProvider>
			</BlogContainer>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		file(sourceInstanceName: { eq: "posts" }, id: { eq: $id }) {
			id
			childMdx {
				slug
				frontmatter {
					date
					description
					title
					thumb {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				body
			}
		}
	}
`
