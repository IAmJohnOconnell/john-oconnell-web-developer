import React from "react"
import styled from "styled-components"
import { FadeUpIn } from "../styles/Keyframes"

const StyledSectionHeaderFull = styled.header`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	margin: 5rem 0;
	text-align: center;

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

const SectionHeaderFull = ({ children, className }) => {
	return (
		<StyledSectionHeaderFull className={className}>
			{children}
		</StyledSectionHeaderFull>
	)
}

export default SectionHeaderFull
