import React from "react"
import styled from "styled-components"

const StyledContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	margin: 2rem auto;
	padding: 2rem;

	/* :nth-of-type(0) {
		margin-bottom: 0;
	}
	:nth-of-type(2) {
		margin-top: 0;
	} */

	@media screen and (min-width: 960px) {
		max-width: 940px;
		margin: 5rem auto;
	}

	@media (min-width: 1200px) {
		max-width: 1200px;
		margin: 7rem auto;
	}
`

const SubContainer = ({ children, className }) => {
	return <StyledContainer className={className}>{children}</StyledContainer>
}

export default SubContainer
