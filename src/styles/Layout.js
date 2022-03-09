import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import styled from "styled-components"
import Footer from "../components/Sections/Footer"
import "@fontsource/poppins"
import "@fontsource/poppins/700.css"
import "@fontsource/open-sans"
import { Theme } from "./Theme"
import Nav from "../components/Nav"

export const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html {
	font-family: ${({ theme }) => theme.fontPrimary};
	font-size: 62.5%; // 10
	scroll-behavior: smooth;
}

body {
	background-color: ${({ theme }) => theme.bg};
	min-height: 100vh;
	box-sizing: border-box;
    font-size: 1.6em;
	color: ${({ theme }) => theme.textColor};
	line-height: 1.6;
}

a {	width: fit-content;}

p {
	font-family: ${({ theme }) => theme.fontSecondary};
}
`

const Site = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`
const SiteContent = styled.div`
	flex-grow: 1;
	margin-top: 2.5rem;
`

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalStyle />
				<Site>
					<Nav />
					<SiteContent>{children}</SiteContent>
					<Footer />
				</Site>
			</>
		</ThemeProvider>
	)
}

export default Layout
// TODO - Home
//
//
// - Projects Index
//
// - Project Details
// fill in missing steppign stone details
//
//
//
// - Blog Index
//	populate articles
//
// - - Blog Details
//
