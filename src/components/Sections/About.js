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
					I work at EONE, on our product configurator and its suite of
					supporting applications.
					<br />
					<br />
					Together with my colleagues I implement new features, bug fixes and
					performance improvements to help our global network of dealers build
					and sell Emergency Vehicles.
				</AboutParagraph>
			</TextContent>
			<TextContent>
				<AboutParagraph>
					My experience in both professional and personal work focuses on my
					core strengths in JavaScript and Front End Development.
					<br />
					<br />
					I’ve worked with a diverse range of APIs and am always excited to
					learn and take on a new challenge.
				</AboutParagraph>
			</TextContent>
		</AboutWrapper>
	)
}

export default About
