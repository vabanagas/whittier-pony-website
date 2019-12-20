import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Onboarding from "../components/home/Onboarding"
import News from "../components/home/News"

export const query = graphql`
  query HomePage {
    markdownRemark(fileAbsolutePath: { regex: "/pages/home.md/" }) {
      frontmatter {
        title
        subtitle
        banner
        image {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const parseQuery = (data: object) => get(data, "markdownRemark.frontmatter")

const IndexPage = ({ data }: { data: object }) => {
  const result = parseQuery(data)
  const title = get(result, "title", "")
  const subtitle = get(result, "subtitle", "")
  const banner = get(result, "banner", "")
  const image = get(result, "image.childImageSharp.fluid")

  return (
    <Layout banner={banner}>
      <SEO title="Home" />
      <Onboarding title={title} subtitle={subtitle} image={image} />
      <News />
    </Layout>
  )
}

export default IndexPage
