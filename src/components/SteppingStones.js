import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionHeaderFull from "./SectionHeaderFull"
import TextContentFull from "./TextContentFull"
import SectionHeading from "./SectionHeading"
import Paragraph from "./Paragraph"
import ProjectsPageWrapper from "./ProjectsPageWrapper"
import ProjectCard from "./UI/ProjectCard"
import Overlay from "./UI/Overlay"
import styled from "styled-components"

const SteppingStonesHeader = styled(TextContentFull)`
	margin-top: 6rem;
`

const SteppingStones = () => {
	const data = useStaticQuery(graphql`
		query SteppingStones {
			steppingstones: allFile(
				filter: { sourceInstanceName: { eq: "steppingstones" } }
			) {
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
								date
								title
							}
						}
					}
				}
			}
		}
	`)
	const steppingstones = data.steppingstones.edges
	return (
		<>
			<SteppingStonesHeader>
				<SectionHeaderFull>
					<SectionHeading>Stepping Stones</SectionHeading>
					<Paragraph>
						<em>The real treasure, is what we learned along the way.</em>
					</Paragraph>
				</SectionHeaderFull>
			</SteppingStonesHeader>
			<ProjectsPageWrapper>
				{steppingstones.map((project) => {
					const image = getImage(project.node.childMdx.frontmatter.thumb)

					return (
						<ProjectCard key={project.node.id}>
							<GatsbyImage image={image} className='image' alt={"an image"} />
							<Link to={project.node.childMdx.slug}>
								<Overlay className='overlay'>
									<h3>{project.node.childMdx.frontmatter.title}</h3>
								</Overlay>
							</Link>
						</ProjectCard>
					)
				})}
			</ProjectsPageWrapper>
		</>
	)
}

export default SteppingStones
