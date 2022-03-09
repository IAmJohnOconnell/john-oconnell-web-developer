import React from "react"
import styled from "styled-components"

const StyledSectionHeading = styled.h2`
	margin: 2rem 0;
	font-weight: bold;
	font-size: 3.3rem;
`
const SectionHeading = ({ children, className }) => {
	return (
		<StyledSectionHeading className={className}>
			{children}
		</StyledSectionHeading>
	)
}

export default SectionHeading
