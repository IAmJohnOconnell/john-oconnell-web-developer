import React from "react"
import styled from "styled-components"

const StyledFooterLinks = styled.footer`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	gap: 1em;
	list-style: none;
	transition: ${({ theme }) => theme.transitionStandard};

	a,
	a:visited,
	a:active {
		border-bottom: 2px solid transparent;
		transition: ${({ theme }) => theme.transitionStandard};

		:hover {
			border-bottom: 2px solid white;
		}
	}
`

const FooterLinks = () => {
	return (
		<StyledFooterLinks>
			<li>
				<a href='https://github.com/IAmJohnOconnell'>Github</a>
			</li>
		</StyledFooterLinks>
	)
}

export default FooterLinks
