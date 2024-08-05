import React from "react"
import Paragraph from "../Paragraph"
import SectionHeader from "../SectionHeader"
import SectionHeading from "../SectionHeading"
import TextContent from "../TextContent"
import SubContainer from "../SubContainer"

import styled from "styled-components"

const ArticlesContainer = styled(SubContainer)`
	a,
	a:visited,
	a:active {
		color: ${({ theme }) => theme.textColorSecondary};
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: ${({ theme }) => theme.transitionStandard};

		:hover {
			border-bottom: 2px solid white;
		}
	}
`

const Articles = () => {
	return (
		<ArticlesContainer>
			<SectionHeader>
				<SectionHeading>Articles</SectionHeading>
				<p className='small'>
					Sometimes I think to myself...Self, write this down.
				</p>
			</SectionHeader>
			<TextContent>
				<Paragraph>
					Sometimes I enjoy writing tutorials and articles about web devevelopment. It's
					an helps to reinforce what I've learned, and is a small way of giving
					back to a community that has always been very helpful to me. It's probably been a while, but you can
					check those out <a href='https://blog.jtocodes.com'>here</a>.
				</Paragraph>
			</TextContent>
		</ArticlesContainer>
	)
}

export default Articles
