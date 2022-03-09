import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../styles/Layout"
import ProjectHeader from "../components/ProjectDetailComponents/ProjectHeader"
import ProjectSection from "../components/ProjectDetailComponents/ProjectSection"
import ProjectDetailFlexContainer from "../components/ProjectDetailComponents/ProjectDetailFlexContainer"
import LessonsLearned from "../components/ProjectDetailComponents/LessonsLearned"
import ImgContainer from "../components/ProjectDetailComponents/ImgContainer"
import SubContainer from "../components/SubContainer"
import SectionHeaderFull from "../components/SectionHeaderFull"
import TextContentFull from "../components/TextContentFull"
import SectionHeading from "../components/SectionHeading"

const TD = (props) => <td style={{ paddingRight: "2em" }} {...props} />

const TR = (props) => <tr style={{ textAlign: "left" }} {...props} />

const Table = (props) => (
	<table style={{ paddingBottom: "1em", paddingTop: "1em" }} {...props} />
)

const TH = (props) => (
	<th style={{ paddingBottom: "1em", textTransform: "uppercase" }} {...props} />
)

const components = {
	wrapper: ({ components, ...rest }) => (
		<main style={{ margin: "0 auto", maxWidth: "80vw" }} {...rest} />
	),
	td: TD,
	tr: TR,
	th: TH,
	table: Table,
}

const shortcodes = {
	ProjectHeader,
	ProjectSection,
	LessonsLearned,
	ImgContainer,
	TextContentFull,
	SectionHeaderFull,
	SectionHeading,
	ProjectDetailFlexContainer,
}

export default function PageTemplate({ data: { mdx } }) {
	const image = mdx.frontmatter.thumb
	return (
		<Layout>
			<SubContainer>
				<MDXProvider components={components}>
					<MDXProvider components={shortcodes}>
						<MDXRenderer frontmatter={mdx.frontmatter} image={image}>
							{mdx.body}
						</MDXRenderer>
					</MDXProvider>
				</MDXProvider>
			</SubContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query ProjectDetailsQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				thumb {
					childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							placeholder: BLURRED
							width: 800
						)
					}
				}
			}
		}
	}
`
