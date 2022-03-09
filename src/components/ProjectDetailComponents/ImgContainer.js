import React from "react"
import styled from "styled-components"

const StyledImageContainer = styled.section`
	text-align: center;
	width: 100%;
`

const ImgContainer = ({ children }) => {
	return <StyledImageContainer>{children}</StyledImageContainer>
}

export default ImgContainer
