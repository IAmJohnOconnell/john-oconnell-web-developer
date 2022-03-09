import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../../styles/Layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Paragraph from "../../components/Paragraph"
import SubContainer from "../../components/SubContainer"
import SectionHeaderFull from "../../components/SectionHeaderFull"
import SectionHeading from "../../components/SectionHeading"
import TextContentFull from "../../components/TextContentFull"
import SteppingStones from "../../components/SteppingStones"
import ProjectsPageWrapper from "../../components/ProjectsPageWrapper"
import ProjectCard from "../../components/UI/ProjectCard"
import Overlay from "../../components/UI/Overlay"

const Projects = ({ data }) => {
	const projects = data.projects.edges

	return (
		<Layout>
			<SubContainer>
				<TextContentFull>
					<SectionHeaderFull>
						<SectionHeading>Projects</SectionHeading>
						<Paragraph>
							I became a developer because I'm passionate about using
							technologies that I love to solve problems and create beautiful
							content.
							<br />
							<br />
							It's hard to top the feeling of bringing a project to life. From
							the initial design, to the deployment, I love the work involved. I
							appreciate the process, even when it isnt easy. And often It isnt.
							<br />
							<br />
							That's why I've also included what I call my "Stepping Stone"
							projects. They aren't pretty, but each one played a big part in
							helping me get to where I am today.
						</Paragraph>
					</SectionHeaderFull>
				</TextContentFull>
				<ProjectsPageWrapper>
					{projects.map((project) => {
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
				<SteppingStones />
			</SubContainer>
		</Layout>
	)
}

export default Projects

export const query = graphql`
	query ProjectsPage {
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
							date
							title
						}
					}
				}
			}
		}
	}
`
