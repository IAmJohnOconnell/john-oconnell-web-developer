import React from "react"
import styled from "styled-components"

const Section = styled.section`
	margin: 2rem 0;

	h2 {
		font-weight: bold;
	}
`

const ProjectSection = ({ children }) => {
	return <Section>{children}</Section>
}

export default ProjectSection
