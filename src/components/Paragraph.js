import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
	margin: 2rem 0;
	width: 100%;
	line-height: 1.6;
	letter-spacing: 0.03em;
`

const Paragraph = ({ children, className }) => {
	return <StyledParagraph className={className}>{children}</StyledParagraph>
}

export default Paragraph
