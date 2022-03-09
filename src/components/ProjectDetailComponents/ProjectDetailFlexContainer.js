import React from "react"
import styled from "styled-components"

const FlexContainer = styled.section`
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: 1fr;
	grid-template-columns: 1fr;
	gap: 2rem;

	grid-auto-flow: row;
	max-width: 100%;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
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
