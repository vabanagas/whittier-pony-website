import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import breakpoints from "../constants/breakpoints"
import values from "../constants/values"
import colors from "../constants/colors"
import typography from "../constants/typography"

const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${colors.black};
  opacity: 0.5;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  padding: 24px;
  padding-top: calc(${values.HEADER_HEIGHT} + 24px);

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
    padding-top: calc(${values.HEADER_HEIGHT} + 1 / 12 * 100vw);
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
    color: ${colors.offWhite};
  }
`

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      <ImageOverlay />
      <Content>
        <Title>Whittier Pony</Title>
        <Subtitle>Real Baseball</Subtitle>
      </Content>
    </Layout>
  )
}

export default IndexPage
