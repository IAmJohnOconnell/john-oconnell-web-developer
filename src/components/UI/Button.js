import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
	background: none;
	box-shadow: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-family: inherit;
	color: #fff;
	text-shadow: none;
	transition: ${({ theme }) => theme.transitionStandard};
	cursor: pointer;

	:hover {
		border-bottom: 2px solid ${({ theme }) => theme.textColor};
	}
`

const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>
}

export default Button
