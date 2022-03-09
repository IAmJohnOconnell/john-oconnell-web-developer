import React from "react"
import styled from "styled-components"

const StyledProjectsPageWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-flow: row;
	gap: 2rem;
	width: 100%;
`

const ProjectsPageWrapper = ({ children, className }) => {
	return (
		<StyledProjectsPageWrapper className={className}>
			{children}
		</StyledProjectsPageWrapper>
	)
}

export default ProjectsPageWrapper
