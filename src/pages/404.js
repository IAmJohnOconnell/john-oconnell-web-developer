import * as React from "react"
import Layout from "../styles/Layout"
import { Link } from "gatsby"
import SubContainer from "../components/SubContainer"
import TextContentFull from "../components/TextContentFull"
import styled from "styled-components"

const FourOhFour = styled.main`
	span {
		color: ${({ theme }) => theme.textColorSecondary};
	}

	a,
	a:visited,
	a:active {
		border-bottom: 2px solid transparent;
		color: ${({ theme }) => theme.textColorSecondary};
		text-decoration: none;
		transition: ${({ theme }) => theme.transitionStandard};

		:hover {
			border-bottom: 2px solid ${({ theme }) => theme.textColor};
		}
	}
`

const NotFoundPage = () => {
	return (
		<Layout>
			<FourOhFour>
				<SubContainer>
					<TextContentFull>
						<title>Not found</title>
						<h1>
							Executing Order: <span>404</span>
							<br />
							<br />
							These aren't the Droids your looking for...
						</h1>
						<h2>You want to go home and rethink your life</h2>
						<Link to={"/"}>This is the Way</Link>
					</TextContentFull>
				</SubContainer>
			</FourOhFour>
		</Layout>
	)
}

export default NotFoundPage
