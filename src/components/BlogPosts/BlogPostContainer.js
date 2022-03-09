import React from "react"
import styled from "styled-components"

const FlexContainer = styled.section`
	display: flex;
	flex-direction: column;
`

const BlogPostContainer = ({ children }) => {
	return <FlexContainer>{children}</FlexContainer>
}

export default BlogPostContainer
