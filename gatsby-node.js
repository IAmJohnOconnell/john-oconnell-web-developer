const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const ProjectsResult = await graphql(`
		query Projects {
			allMdx {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)

	const projects = ProjectsResult.data.allMdx.edges
	projects.forEach(({ node }, index) => {
		createPage({
			path: `/projects/${node.slug}`,
			component: path.resolve("./src/templates/ProjectDetails.js"),
			context: { id: node.id, slug: node.slug },
		})
	})

	const steppingStones = ProjectsResult.data.allMdx.edges
	projects.forEach(({ node }, index) => {
		createPage({
			path: `/projects/${node.slug}`,
			component: path.resolve("./src/templates/ProjectDetails.js"),
			context: { id: node.id, slug: node.slug },
		})
	})

	const PostsResult = await graphql(`
		query Posts {
			allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
				edges {
					node {
						id
						childMdx {
							slug
						}
					}
				}
			}
		}
	`)

	const posts = PostsResult.data.allFile.edges
	posts.forEach(({ node }, index) => {
		createPage({
			path: `/blog/${node.childMdx.slug}`,
			component: path.resolve("./src/templates/BlogPost.js"),
			context: { id: node.id, slug: node.childMdx.slug },
		})
	})
}
