import React from "react"
import styled from "styled-components"

const StyledProjectCard = styled.div`
	position: relative;
	transition: ${({ theme }) => theme.transitionStandard};

	border-radius: 1rem;

	:hover {
		transform: translateY(-1rem);

		.overlay {
			opacity: 1;
		}
	}

	a,
	a:visited,
	a:active {
		color: ${({ theme }) => theme.textColor};
		text-decoration: none;
	}

	.image {
		border-radius: 1rem;
		box-shadow: ${({ theme }) => theme.boxShadow};
		transition: ${({ theme }) => theme.transitionStandard};
	}
`

const ProjectCard = ({ children, className }) => {
	return <StyledProjectCard className={className}>{children}</StyledProjectCard>
}

export default ProjectCard
