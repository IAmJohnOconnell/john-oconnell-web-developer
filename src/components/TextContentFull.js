import React from "react"
import styled from "styled-components"

const StyledTextContentFull = styled.div`
	width: 100%;
	text-align: center;

	p {
		margin: 2rem 0;
	}

	@media screen and (min-width: 60rem) {
		max-width: 700px;
		margin: 0 auto;
	}
`

const TextContentFull = ({ className, children }) => {
	return (
		<StyledTextContentFull className={className}>
			{children}
		</StyledTextContentFull>
	)
}
export default TextContentFull
