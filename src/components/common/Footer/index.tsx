import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import typography from "../../../constants/typography"
import breakpoints from "../../../constants/breakpoints"
import colors from "../../../constants/colors"
import Link from "../Link"

const Container = styled.footer`
  height: 50vh;
  width: 100vw;
  background-color: ${colors.black};
  padding: 24px;

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => {
  return (
    <Container>
      <Content />
    </Container>
  )
}

export default Footer
