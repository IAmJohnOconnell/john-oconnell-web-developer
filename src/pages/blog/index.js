import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../styles/Layout"
import styled from "styled-components"
import SubContainer from "../../components/SubContainer"
import SectionHeaderFull from "../../components/SectionHeaderFull"
import TextContentFull from "../../components/TextContentFull"
import SectionHeading from "../../components/SectionHeading"
import Paragraph from "../../components/Paragraph"

const ProjectDetailsSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-flow: row;
	gap: 2rem;
	max-width: 1024px;
	width: 100%;
	margin: 0 auto;

	@media screen and (min-width: 40rem) {
		grid-template-columns: repeat(2, minmax(400px, 1fr));
	}

	a {
		width: fit-content;
		color: ${({ theme }) => theme.textColor};
		text-decoration: none;
	}
`

const Post = styled.article`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.bgOverlay};
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.boxShadow};
	transition: ${({ theme }) => theme.transitionStandard};

	h3 {
		transition: ${({ theme }) => theme.transitionStandard};
	}

	p {
		flex-grow: 1;
	}

	:hover {
		transform: translateY(-1rem);
		h3 {
			color: ${({ theme }) => theme.textColorSecondary};
		}
	}
`

const Blog = ({ data }) => {
	const posts = data.posts.edges
	return (
		<Layout>
			<SubContainer>
				<TextContentFull>
					<SectionHeaderFull>
						<SectionHeading>Articles</SectionHeading>
						<Paragraph>
							Here you can find just about everything I've written about web
							development.
						</Paragraph>
					</SectionHeaderFull>
				</TextContentFull>

				<ProjectDetailsSection>
					{posts.map((post) => {
						return (
							<Post key={post.node.childMdx.id}>
								<Link to={post.node.childMdx.slug} key={post.node.id}>
									<h3>{post.node.childMdx.frontmatter.title}</h3>
									<p>{post.node.childMdx.frontmatter.description}</p>
								</Link>
							</Post>
						)
					})}
				</ProjectDetailsSection>
			</SubContainer>
		</Layout>
	)
}

export default Blog

export const query = graphql`
	query BlogPage {
		posts: allFile(
			filter: { sourceInstanceName: { eq: "posts" } }
			sort: { fields: childrenMdx___frontmatter___date, order: DESC }
		) {
			edges {
				node {
					id
					childMdx {
						slug
						id
						frontmatter {
							title
							date
							description
						}
					}
				}
			}
		}
	}
`
