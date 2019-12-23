import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { get } from "lodash"

import Block from "../../common/Block"
import media from "../../../constants/media"
import colors from "../../../constants/colors"
import typography from "../../../constants/typography"
import { parseAllMarkdownRemark } from "../../../utils"
import GatsbyImage, { FluidObject } from "gatsby-image"

const Container = styled(Block)`
  flex-direction: column;
  background-color: ${colors.offWhite};
`

const Header = styled.div`
  ${typography.H3};
  color: ${colors.black};
  margin-bottom: 48px;

  ${media.tablet} {
    margin-bottom: calc(1 / 12 * 100vw);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Sponsor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  padding: 24px;
  margin: 24px 0;

  ${media.tablet} {
    width: calc(4.5 / 12 * 100vw);
    margin: calc(0.25 / 12 * 100vw);
    padding: calc(0.5 / 12 * 100vw);
  }

  ${media.desktop} {
    width: calc(3 / 12 * 100vw);
    margin: calc(0.333 / 2 / 12 * 100vw);
    padding: calc(0.25 / 12 * 100vw);
  }

  ${media.largeDesktop} {
    width: calc(1.75 / 12 * 100vw);
    margin: calc(0.25 / 2 / 12 * 100vw);
    padding: calc(0.25 / 12 * 100vw);
  }
`

const SponsorTitle = styled.div`
  ${typography.SmallCaps};
  color: ${colors.black};
  margin-bottom: 24px;
`

const SponsorImage = styled(GatsbyImage)``

const renderSponser = (sponsor: object) => {
  const title: string = get(sponsor, "frontmatter.title", "")
  const image: FluidObject | undefined = get(
    sponsor,
    "frontmatter.logo.childImageSharp.fluid"
  )
  const url: string = get(sponsor, "frontmatter.url", "")
  const featured: boolean = get(sponsor, "frontmatter.featured", false)
  return (
    <Sponsor key={title} href={url} target="__blank">
      <SponsorTitle>{title}</SponsorTitle>
      {image !== undefined && featured === true && (
        <SponsorImage fluid={image} />
      )}
    </Sponsor>
  )
}

const Sponsors = () => {
  const data: object = useStaticQuery(graphql`
    query Sponsors {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/sponsors/" } }
        sort: { fields: [frontmatter___featured] }
      ) {
        edges {
          node {
            frontmatter {
              title
              logo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              url
              featured
            }
          }
        }
      }
    }
  `)

  const sponsors = parseAllMarkdownRemark(data)

  return (
    <Container>
      <Header>Thank you to our sponsors!</Header>
      <Content>{sponsors.map(renderSponser)}</Content>
    </Container>
  )
}

export default Sponsors
