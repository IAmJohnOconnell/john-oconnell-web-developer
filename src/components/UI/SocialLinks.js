import React from "react"
import styled from "styled-components"
import Github from "../../images/SVG/github.svg"
import { FadeUpIn } from "../../styles/Keyframes"
import { Hop } from "../../styles/Keyframes"

const StyledSocialLinks = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	gap: 1em;
	margin: 1.3rem 0;
	transition: ${ ( { theme } ) => theme.transitionStandard };

	opacity: 0;
	animation: ${ FadeUpIn } 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

	svg {
		fill: ${ ( { theme } ) => theme.textColorSecondary };
		transition: ${ ( { theme } ) => theme.transitionStandard };

		:hover {
			fill: white;
			color: white;
			transform: translateY(-1rem);
		}
	}

	a,
	a:visited,
	a:active {
		color: ${ ( { theme } ) => theme.textColorSecondary };
		text-decoration: none;
		-webkit-animation: ${ Hop } 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		animation: ${ Hop } 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

		:nth-of-type(1) {
			-webkit-animation-delay: 1s;
			animation-delay: 1s;
		}
		:nth-of-type(2) {
			-webkit-animation-delay: 1.2s;
			animation-delay: 1.2s;
		}
		:nth-of-type(3) {
			-webkit-animation-delay: 1.4s;
			animation-delay: 1.4s;
		}
	}
`

const SocialLinks = ( { className } ) => {
	return (
		<StyledSocialLinks className={ className }>
			<a href='https://github.com/IAmJohnOconnell'>
				<Github />
			</a>
		</StyledSocialLinks>
	)
}

export default SocialLinks
