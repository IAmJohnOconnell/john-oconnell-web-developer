import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hamburger from "./UI/Hamburger"

const StyledNav = styled.nav`
	position: fixed;
	width: 100%;
	text-shadow: none;
	background-color: ${({ theme }) => theme.bgNav};
	-webkit-backdrop-filter: blur(6px);
	backdrop-filter: blur(6px);
	z-index: 1;

	ul {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		gap: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
		margin: 2rem auto;
		list-style: none;
		padding: 0 2rem;
		max-width: 1200px;

		div {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}
	}
`

const NavLinks = styled.div`
	gap: 2rem;
	margin-left: auto;
	transition: ${({ theme }) => theme.transitionStandard};
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

	transform: ${({ isOpen }) =>
		isOpen ? "translateY(0)" : "translateY(-5rem)"};

	a {
		color: #fff;
		text-decoration: none;
		border-bottom: 2px solid transparent;

		:hover {
			border-bottom: 2px solid ${({ theme }) => theme.textColorSecondary};
			transition: ${({ theme }) => theme.transitionStandard};
		}
	}
`

const Logo = styled.li`
	color: #fff;
	text-decoration: none;
	font-weight: bold;

	cursor: pointer;
	letter-spacing: 0.1rem;
	font-family: ${({ theme }) => theme.fontSecondary};
	transition: ${({ theme }) => theme.transitionStandard};

	display: none;

	@media screen and (min-width: 560px) {
		display: unset;
	}

	a {
		color: #fff;
		text-decoration: none;

		:hover {
			transition: ${({ theme }) => theme.transitionStandard};
			color: ${({ theme }) => theme.textColorSecondary};
		}
	}

	:hover {
		color: ${({ theme }) => theme.textColorSecondary};
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
`

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<StyledNav>
			<ul>
				<Logo>
					<Link to={"/"}>{`< JO / >`}</Link>
				</Logo>
				<NavLinks isOpen={isOpen}>
					<li>
						<Link to={"/"}>Home</Link>
					</li>

					<li>
						<Link to={"/projects"}>Projects</Link>
					</li>

					<li>
						<a href='https://blog.jtocodes.com'>Articles</a>
					</li>
				</NavLinks>
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
			</ul>
		</StyledNav>
	)
}

export default Nav
