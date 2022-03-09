import React from "react"
import styled from "styled-components"

const StyledTextContent = styled.div`
	max-width: 700px;
	width: 100%;

	@media screen and (min-width: 60rem) {
		width: 45%;
	}
`

const TextContent = ({ className, children }) => {
	return <StyledTextContent className={className}>{children}</StyledTextContent>
}
export default TextContent
