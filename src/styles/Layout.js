import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import styled from "styled-components"
import Footer from "../components/Sections/Footer"
import "@fontsource/poppins"
import "@fontsource/poppins/700.css"
import "@fontsource/open-sans"
import { Theme } from "./Theme"
import Nav from "../components/Nav"
import { Helmet } from "react-helmet"

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

a {	width: -webkit-fit-content;	width: -moz-fit-content;	width: fit-content;}

p {
	font-family: ${({ theme }) => theme.fontSecondary};
}
`

const Site = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	min-height: 100vh;
`
const SiteContent = styled.div`
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	margin-top: 2.5rem;
`

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalStyle />
				<Helmet>
					<html lang='en' />
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<title>John OConnell | Web Developer</title>
					<meta
						name='description'
						content="John O'Connell is a Web Developer from Florida. My passion is creating beautiful websites, writing about web development and exploring all of the latest web development trends and technologies. This site is a portfolio of my work."
					/>
				</Helmet>
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
