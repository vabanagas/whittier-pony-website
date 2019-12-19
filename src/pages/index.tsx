import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Onboarding from "../components/home/Onboarding"
import News from "../components/home/News"

export const query = graphql`
  query HomePage {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            type
            title
            date
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }: { data: object }) => {
  const edges = get(data, "allMarkdownRemark.edges")
  console.log(edges)
  return (
    <Layout>
      <SEO title="Home" />
      <Onboarding />
      <News />
    </Layout>
  )
}

export default IndexPage
