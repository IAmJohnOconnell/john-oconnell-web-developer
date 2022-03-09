import React from "react"
import styled from "styled-components"
import SectionHeader from "../SectionHeader"
import Paragraph from "../Paragraph"
import SubContainer from "../SubContainer"
import TextContent from "../TextContent"
import SectionHeading from "../SectionHeading"

const SkillsContainer = styled.div`
	background-color: ${({ theme }) => theme.bgOverlay};
	box-shadow: ${({ theme }) => theme.boxShadow};
	min-width: 100%;
`

const SkillsSubContainer = styled(SubContainer)`
	margin: 10rem auto;
`

const Skill = styled.div`
	display: flex;
	flex-direction: column;
`

const SkillsTextContent = styled(TextContent)`
	max-width: 700px;
	width: 100%;
`

const SkillsContent = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;

	span {
		padding: 1rem 0;
		font-weight: bold;

		::before {
			content: "\\26AC";
			margin-right: 0.4rem;
		}
	}

	@media screen and (min-width: 60rem) {
		flex-direction: row;
	}
`

const Skills = () => {
	return (
		<SkillsContainer>
			<SkillsSubContainer>
				<SkillsTextContent>
					<SectionHeader>
						<SectionHeading>My Skills</SectionHeading>
						<p className='small'>
							#1 Web Dev in the neighborhood - Independant Study
						</p>
					</SectionHeader>
					<Paragraph>
						As I've progressed as a developer, Ive gained a solid understanding
						of web development concepts. I invest my time practicing what I've
						learned, and apply these concepts to real-world scenarios and
						projects.
					</Paragraph>
				</SkillsTextContent>
				<SkillsContent>
					<Skill>
						<span>HTML & CSS</span>
						<span>SASS</span>
					</Skill>
					<Skill>
						<span>Javascript ES6</span>
						<span>React</span>
					</Skill>
					<Skill>
						<span>Gatsby</span>
						<span>Styled-Components</span>
					</Skill>
					<Skill>
						<span>Node</span>
						<span>Git & Version Control</span>
					</Skill>
				</SkillsContent>
			</SkillsSubContainer>
		</SkillsContainer>
	)
}

export default Skills
