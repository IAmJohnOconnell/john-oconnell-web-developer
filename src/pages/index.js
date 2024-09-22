import React from "react"
import Layout from "../styles/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Sections/Hero"
import About from "../components/Sections/About"
import Skills from "../components/Sections/Skills"
import RecentWork from "../components/Sections/RecentWork"

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Hero />
			<About />
			<Skills />
			<RecentWork data={data} />
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query HomePage {
		projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
			edges {
				node {
					id
					childMdx {
						slug
						frontmatter {
							description
							thumb {
								childImageSharp {
									gatsbyImageData(placeholder: BLURRED)
								}
							}
							frontPage
							title
						}
					}
				}
			}
		}
	}
`
