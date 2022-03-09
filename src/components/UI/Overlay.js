import React from "react"
import styled from "styled-components"

const StyledOverlay = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	visibility: none;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	opacity: 0;
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	-webkit-backdrop-filter: blur(3px);
	backdrop-filter: blur(3px);
	padding: 1rem;
	border-radius: 1rem;
	color: #fff;
	text-align: center;
	text-shadow: ${({ theme }) => theme.boxShadow};
	transition: ${({ theme }) => theme.transitionCard};
`

const Overlay = (props) => {
	return (
		<StyledOverlay className={props.className}> {props.children}</StyledOverlay>
	)
}

export default Overlay
