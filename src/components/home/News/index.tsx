import React from "react"
import styled from "styled-components"

import colors from "../../../constants/colors"
import breakpoints from "../../../constants/breakpoints"

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${colors.offWhite};
  padding: 24px;

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const News = () => {
  return <Container />
}

export default News
