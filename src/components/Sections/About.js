import React from "react"
import TextContent from "../TextContent"
import Paragraph from "../Paragraph"
import styled from "styled-components"
import { FadeIn } from "../../styles/Keyframes"

const AboutWrapper = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: start;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 2rem;
	gap: 2rem;

	@media screen and (min-width: 960px) {
		max-width: 940px;
		margin: 0 auto;
	}

	@media (min-width: 1200px) {
		max-width: 1200px;
	}

	opacity: 0;
	animation: ${FadeIn} 1s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`

const AboutParagraph = styled(Paragraph)`
	margin: 0;

	a {
		color: #ffde91;
	}

	@media screen and (min-width: 960px) {
		margin-bottom: 5rem;
	}

	@media (min-width: 1200px) {
		margin-bottom: 7rem;
	}
`

const About = () => {
	return (
		<AboutWrapper>
			<TextContent>
				<AboutParagraph>
					I work at <a href="https://www.meevo.com">Meevo</a>. Lovingly building the Beauty & Wellness industry's most beloved software.
					I split time between Product Design and a Scrum team, designing the look and feel of Meevo for years to come, and bringing new features to life.
					<br />
					<br />
					Together with my colleagues I implement new features, build component libraries, style guides, fix bugs and evolve user experiences into measureable improvements for both the user and the business.
				</AboutParagraph>
			</TextContent>
			<TextContent>
				<AboutParagraph>
					My core strengths in JavaScript and Front End Development are complimented by my passion for UI/UX work and design. I care deeply about building high quality experiences and find fulfillment in building things people enjoy.
					<br />
					<br />
					I have experience with popular frameworks and libraries such as Angular and React, and am always excited to learn, and face new challenges.
				</AboutParagraph>
			</TextContent>
		</AboutWrapper>
	)
}

export default About
