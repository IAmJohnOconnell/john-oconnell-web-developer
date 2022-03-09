import React from "react"
import styled from "styled-components"
import SubContainer from "../SubContainer"
import SocialLinks from "../UI/SocialLinks"
import { FadeUpIn } from "../../styles/Keyframes"

const HeroSection = styled.section`
	display: -ms-grid;
	display: grid;
	grid-template-areas: "name" "paragraph" "social";
	place-content: center;
	margin-top: 4.5rem;

	h1 {
		grid-area: name;
		font-weight: bold;
		font-size: clamp(3.5rem, 4vw + 1rem, 5rem);

		opacity: 0;
		animation: ${FadeUpIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	span {
		font-weight: bold;
		color: ${({ theme }) => theme.textColorSecondary};
	}
`

const Blurb = styled.h2`
	opacity: 0;
	animation: ${FadeUpIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

	:nth-of-type(1) {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	:nth-of-type(2) {
		-webkit-animation-delay: 0.4s;
		animation-delay: 0.4s;
	}
	:nth-of-type(3) {
		-webkit-animation-delay: 0.6s;
		animation-delay: 0.6s;
	}
`
const Desc = styled.div`
	grid-area: paragraph;
`

const Hero = () => {
	return (
		<SubContainer>
			<HeroSection>
				<h1>
					Hi there, I'm <span>John.</span>
				</h1>
				<Desc>
					<Blurb>
						I'm a Front-End focused <span>Web Developer.</span>
					</Blurb>
					<Blurb>I have fun building websites that work well.</Blurb>
					<Blurb>Some of them even look good!</Blurb>
				</Desc>
				<SocialLinks />
			</HeroSection>
		</SubContainer>
	)
}

export default Hero
