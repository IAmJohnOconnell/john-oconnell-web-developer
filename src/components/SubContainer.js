import React from "react"
import styled from "styled-components"

const StyledContainer = styled.section`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;

	margin: 2rem auto;
	padding: 2rem;

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
