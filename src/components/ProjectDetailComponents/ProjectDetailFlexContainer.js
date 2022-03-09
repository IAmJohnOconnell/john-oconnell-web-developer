import React from "react"
import styled from "styled-components"

const FlexContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	grid-auto-flow: row;
	max-width: 100%;
	justify-content: space-between;

	@media screen and (min-width: 60rem) {
		grid-template-columns: repeat(2, minmax(200px, 1fr));
		gap: 5%;
	}
`

const ProjectDetailFlexContainer = ({ children }) => {
	return <FlexContainer>{children}</FlexContainer>
}

export default ProjectDetailFlexContainer
