import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 2rem;
	width: 100%;
	background-color: ${({ theme }) => theme.bgOverlay};
	box-shadow: ${({ theme }) => theme.boxShadow};
	font-size: 1.2rem;
	letter-spacing: 0.04rem;
	transition: ${({ theme }) => theme.transitionStandard};

	h3 {
		margin: 0.5rem 0;
		color: ${({ theme }) => theme.textColorSecondary};
		font-weight: bold;
	}

	p {
		margin-bottom: 0.5em;
	}
`
const FooterContent = styled.div`
	display: -ms-grid;
	display: grid;
	grid-template-areas: "left" "middle" "right" "bottom";
	margin: 0 auto;

	@media screen and (min-width: 40rem) {
		grid-template-areas: "left middle right" ". bottom .";
		-ms-grid-columns: (minmax(100px, 1fr)) [auto-fit];
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	}

	@media screen and (min-width: 960px) {
		max-width: 940px;
	}

	@media (min-width: 1200px) {
		max-width: 1200px;
	}
`
const FooterSection = styled.div`
	grid-area: left;

	a,
	a:visited,
	a:active {
		border-bottom: 2px solid transparent;
		color: ${({ theme }) => theme.textColorSecondary};
		text-decoration: none;
		transition: ${({ theme }) => theme.transitionStandard};

		:hover {
			width: -webkit-fit-content;
			width: -moz-fit-content;
			width: fit-content;
			-webkit-transform: scale(1.03) translateY(-0.5rem);
			transform: scale(1.03) translateY(-0.5rem);
		}
	}

	:nth-of-type(2) {
		grid-area: middle;
	}

	:nth-of-type(3) {
		margin-top: 2rem;
		grid-area: right;
		place-self: center;

		@media screen and (min-width: 40rem) {
			place-self: end;
			margin-top: 0;
		}
	}

	@media screen and (min-width: 40rem) {
		border-bottom: none;
	}
`

const Email = styled.p`
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	margin: 1em 0;
	border-bottom: 2px solid transparent;
	color: #fff;
	transition: ${({ theme }) => theme.transitionStandard};

	:hover {
		border-bottom: 2px solid ${({ theme }) => theme.textColorSecondary};
		-webkit-transform: scale(1.03) translateY(-0.5rem);
		transform: scale(1.03) translateY(-0.5rem);
	}
`
const Resume = styled.a`
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	margin: 1em 0;
	border-bottom: 2px solid transparent;
	color: ${({ theme }) => theme.textColorSecondary};
	transition: ${({ theme }) => theme.transitionStandard};
	cursor: pointer;

	:hover {
		border-bottom: 2px solid white;
		-webkit-transform: scale(1.03) translateY(-0.5rem);
		transform: scale(1.03) translateY(-0.5rem);
	}
`

const Footer = () => {
	return (
		<StyledFooter>
			<FooterContent>
				<FooterSection>
					<h3>Lets Build Something Together</h3>
					<p>I'm always looking for something to do, and I love a challenge.</p>
					<Email>Johnathano619@gmail.com</Email>
				</FooterSection>
			</FooterContent>
		</StyledFooter>
	)
}

export default Footer
