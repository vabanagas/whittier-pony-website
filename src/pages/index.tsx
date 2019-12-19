import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Onboarding from "../components/home/Onboarding"
import News from "../components/home/News"

export const query = graphql`
  query HomePage {
    file(sourceInstanceName: { eq: "pages" }, name: { eq: "home" }) {
      childMarkdownRemark {
        frontmatter {
          title
          subtitle
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
  }
`

const parseQuery = (data: object) =>
  get(data, "file.childMarkdownRemark.frontmatter")

const IndexPage = ({ data }: { data: object }) => {
  const result = parseQuery(data)
  const title = get(result, "title", "")
  const subtitle = get(result, "subtitle", "")
  const image = get(result, "image.childImageSharp.fluid")

  return (
    <Layout>
      <SEO title="Home" />
      <Onboarding title={title} subtitle={subtitle} image={image} />
      <News />
    </Layout>
  )
}

export default IndexPage
