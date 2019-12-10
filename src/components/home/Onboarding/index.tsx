import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import colors from "../../../constants/colors"
import breakpoints from "../../../constants/breakpoints"
import typography from "../../../constants/typography"

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${colors.black};
  opacity: 0.5;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 24px;

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const Title = styled.div`
  ${typography.H3};
  color: ${colors.offWhite};

  @media ${breakpoints.desktop} {
    ${typography.H1};
    color: ${colors.offWhite};
  }
`

const Subtitle = styled.div`
  ${typography.H5};
  color: ${colors.lightGray};

  @media ${breakpoints.desktop} {
    ${typography.H3};
    color: ${colors.lightGray};
  }
`

const ScrollHint = styled.div`
  position: absolute;
  bottom: 0;
  left: 96px;

  @media ${breakpoints.desktop} {
    left: calc(2 / 12 * 100vw);
  }
`

const ScrollHintText = styled.div`
  ${typography.SmallCaps};
  color: ${colors.offWhite};
  margin-bottom: 16px;
  transform: translateX(-50%);
`

const ScrollHintLine = styled.div`
  height: 64px;
  width: 2px;
  background-color: ${colors.offWhite};
`

const Onboarding = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "landing.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      <ImageOverlay />
      <Content>
        <Title>Whittier Pony</Title>
        <Subtitle>Real Baseball</Subtitle>
      </Content>
      <ScrollHint>
        <ScrollHintText>Play Ball</ScrollHintText>
        <ScrollHintLine />
      </ScrollHint>
    </Container>
  )
}

export default Onboarding
