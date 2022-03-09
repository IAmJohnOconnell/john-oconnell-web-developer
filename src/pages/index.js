import React from "react"
import Layout from "../styles/Layout"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import RecentWork from "../components/sections/RecentWork"
import Articles from "../components/sections/Articles"

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<title>Home Page</title>
			<Hero />
			<About />
			<Skills />
			<RecentWork data={data} />
			<Articles />
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
