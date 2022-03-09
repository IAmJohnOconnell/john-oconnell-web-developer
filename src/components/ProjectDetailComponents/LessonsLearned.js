import React from "react"
import styled from "styled-components"

const Section = styled.section`
	margin: 5rem auto;
	display: flex;
	flex: 0 1 100%;
	text-align: center;
	place-items: center;
	flex-direction: column;
	padding: 2em;
	background-color: ${({ theme }) => theme.bgOverlay};
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.boxShadow};

	h2 {
		font-weight: bold;
	}

	p {
		max-width: 60%;
	}

	@media screen and (max-width: 50rem) {
		max-width: 100%;

		p {
			max-width: 100%;
		}
	}
`

const LessonsLearned = ({ children }) => {
	return <Section>{children}</Section>
}

export default LessonsLearned
