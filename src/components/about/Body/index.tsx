import React from "react"
import styled from "styled-components"

import values from "../../../constants/values"
import Block from "../../common/Block"

const Container = styled(Block)`
  margin-top: ${values.HEADER_HEIGHT}px;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export interface IBodyProps {
  html: string
}

const Body = (props: IBodyProps) => (
  <Container>
    <Content dangerouslySetInnerHTML={{ __html: props.html }} />
  </Container>
)

export default Body
