import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
	margin: 5rem 0;
	max-width: 80rem;

	h1 {
		font-size: clamp(2rem, 3vw + 1rem, 6rem);
		font-weight: bold;
		color: ${({ theme }) => theme.textColor};
	}

	a,
	a:link,
	a:visited,
	a:active {
		color: ${({ theme }) => theme.textColorSecondary};
		text-decoration: none;
		font-weight: bold;
	}
`

const ProjectHeader = ({ children }) => {
	return <StyledSection>{children}</StyledSection>
}

export default ProjectHeader
