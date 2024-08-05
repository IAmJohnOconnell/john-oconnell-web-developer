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
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`

const SkillsTextContent = styled(TextContent)`
	max-width: 700px;
	width: 100%;
`

const SkillsContent = styled.section`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
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
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
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
							#1 Web Dev in the neighborhood - Independent Study
						</p>
					</SectionHeader>
					<Paragraph>
						As I've progressed as a developer, I've continued to gain a deeper understanding
						of web development concepts. I invest my time practicing what I've
						learned, and apply these concepts to real-world scenarios. I'll always be a student development and design, looking for something new to learn. Here are some skills I've used professionally, and am pretty good at.
					</Paragraph>
				</SkillsTextContent>
				<SkillsContent>
					<Skill>
						<span>HTML & CSS</span>
						<span>Javascript ES6</span>
						<span>SASS</span>
					</Skill>
					<Skill>
						<span>Typescript</span>
						<span>Angular</span>
						<span>React</span>
					</Skill>
					<Skill>
						<span>Angular Material</span>
						<span>Gatsby</span>
						<span>Styled-Components</span>
					</Skill>
					<Skill>
						<span>Node</span>
						<span>Git & Version Control</span>
						<span>Storybook</span>
					</Skill>
				</SkillsContent>
			</SkillsSubContainer>
		</SkillsContainer>
	)
}

export default Skills
