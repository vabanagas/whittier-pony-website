import React from "react"
import styled from "styled-components"

import breakpoints from "../../../constants/breakpoints"
import values from "../../../constants/values"

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: ${values.HEADER_HEIGHT}px;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
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
