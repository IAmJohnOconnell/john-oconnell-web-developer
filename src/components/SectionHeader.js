import React from "react"
import styled from "styled-components"
import { FadeUpIn } from "../styles/Keyframes"

const StyledSectionHeader = styled.header`
	width: 100%;

	opacity: 0;
	animation: ${FadeUpIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

	h2 {
		margin: 0;
		padding-bottom: 0.5rem;
		line-height: 0.9;
	}

	p {
		max-width: 100%;
	}

	.small {
		font-style: italic;
	}
`

const SectionHeader = ({ children, className }) => {
	return (
		<StyledSectionHeader className={className}>{children}</StyledSectionHeader>
	)
}

export default SectionHeader
