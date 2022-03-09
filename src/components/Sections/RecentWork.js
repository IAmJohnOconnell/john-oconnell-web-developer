import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../UI/Button"
import SectionHeader from "../SectionHeader"
import SubContainer from "../SubContainer"
import TextContent from "../TextContent"
import SectionHeading from "../SectionHeading"
import Paragraph from "../Paragraph"

const Projects = styled.div`
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: 1fr;
	grid-template-columns: 1fr;
	grid-auto-flow: row;
	gap: 5rem;

	@media screen and (min-width: 40rem) {
		grid-template-columns: repeat(2, 1fr);
		gap: 10rem;
	}
`

const RecentWorkTextContent = styled(TextContent)`
	max-width: 700px;
	width: 100%;
`

const Project = styled.div`
	display: -ms-grid;
	display: grid;
	grid-template-areas: "image" "title" "desc" "button";

	transition: ${({ theme }) => theme.transitionStandard};

	a {
		color: ${({ theme }) => theme.textColor};
		text-decoration: none;
	}

	.image {
		grid-area: image;
		border-radius: 1rem;
		transition: ${({ theme }) => theme.transitionStandard};
		box-shadow: ${({ theme }) => theme.boxShadow};
	}

	h3 {
		grid-area: title;
		max-width: 100%;
		margin-top: 2rem;
		font-size: 3rem;
		font-weight: bold;
		text-shadow: ${({ theme }) => theme.textShadowHeaders};
		transition: ${({ theme }) => theme.transitionStandard};
	}

	p {
		grid-area: desc;
		margin: 1rem 0;
	}

	button {
		grid-area: button;
		margin: 2rem 0;
		text-shadow: none;
		font-weight: bold;
		font-size: 1.6rem;
		letter-spacing: 0.1em;
		box-shadow: none;
	}

	:hover {
		.image {
			transition: ${({ theme }) => theme.transitionStandard};
			-webkit-transform: scale(1.03);
			transform: scale(1.03);
			box-shadow: ${({ theme }) => theme.hoverShadow};
		}

		h3 {
			color: ${({ theme }) => theme.textColor};
			text-shadow: ${({ theme }) => theme.textShadow};
		}

		button {
			color: ${({ theme }) => theme.textColorSecondary};
			border-bottom: 2px solid ${({ theme }) => theme.textColor};
		}
	}
`

const RecentWork = ({ data }) => {
	const projects = data.projects.edges
	const frontPageProjects = projects.filter((featured) => {
		return featured.node.childMdx.frontmatter.frontPage
	})

	const projectsGroupA = []
	const projectsGroupB = []
	for (let i = 0; i < frontPageProjects.length; i++) {
		const element = frontPageProjects[i]
		if (i <= 1) {
			projectsGroupA.push(element)
		} else if (i <= 3) {
			projectsGroupB.push(element)
		}
	}

	return (
		<SubContainer>
			<RecentWorkTextContent>
				<SectionHeader>
					<SectionHeading>What I've Been Working On</SectionHeading>
					<p className='small'>That's what's up.</p>
				</SectionHeader>
				<Paragraph>
					I prefer to stay busy, and almost always have a project in the works.
					You can check out some of my favorites below.
				</Paragraph>
			</RecentWorkTextContent>

			<Projects>
				{projectsGroupA.map((project) => {
					const image = getImage(project.node.childMdx.frontmatter.thumb)
					return (
						<Project key={project.node.id}>
							<Link to={"/projects/" + project.node.childMdx.slug}>
								<GatsbyImage image={image} alt={"an image"} className='image' />
							</Link>
							<Link to={"/projects/" + project.node.childMdx.slug}>
								<h3>{project.node.childMdx.frontmatter.title}</h3>
							</Link>
							<p>{project.node.childMdx.frontmatter.description}</p>
							<Link to={"/projects/" + project.node.childMdx.slug}>
								<Button>View Project</Button>
							</Link>
						</Project>
					)
				})}
				{projectsGroupB.map((project) => {
					const image = getImage(project.node.childMdx.frontmatter.thumb)

					return (
						<Project key={project.node.id}>
							<Link to={"/projects/" + project.node.childMdx.slug}>
								<GatsbyImage image={image} alt={"an image"} className='image' />
							</Link>
							<Link to={"/projects/" + project.node.childMdx.slug}>
								<h3>{project.node.childMdx.frontmatter.title}</h3>
							</Link>
							<p>{project.node.childMdx.frontmatter.description}</p>
							<Link to={"/projects/" + project.node.childMdx.slug}>
								<Button>View Project</Button>
							</Link>
						</Project>
					)
				})}
			</Projects>
		</SubContainer>
	)
}

export default RecentWork
