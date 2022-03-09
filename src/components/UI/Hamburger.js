import React from "react"
import styled from "styled-components"

const Burger = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-around;
	gap: 0;
	width: 2rem;
	height: 2rem;
	cursor: pointer;
	top: 2rem;
	right: 2rem;
	z-index: 2;
`
const Slice = styled.span`
	gap: 0;
	padding: 1px;
	width: 2rem;
	height: 0.25rem;
	border-radius: 1rem;
	transition: ${({ theme }) => theme.transitionStandard};
	transform-origin: ${({ isOpen }) => (isOpen ? "1px" : "center")};
	background-color: ${({ theme }) => theme.textColor};

	:nth-of-type(1) {
		transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
		background-color: ${({ isOpen }) => (isOpen ? "#ffde91" : "white")};
	}

	:nth-of-type(2) {
		transform: ${({ isOpen }) =>
			isOpen ? "translateX(100%)" : "translateX(0)"};
		opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
		background-color: ${({ isOpen }) => (isOpen ? "white" : "#ffde91")};
	}

	:nth-of-type(3) {
		transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
	}
`

const Hamburger = ({ isOpen, setIsOpen }) => {
	return (
		<Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
			<Slice isOpen={isOpen}></Slice>
			<Slice isOpen={isOpen}></Slice>
			<Slice isOpen={isOpen}></Slice>
		</Burger>
	)
}

export default Hamburger
