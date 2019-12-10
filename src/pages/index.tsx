import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Onboarding from "../components/home/Onboarding"
import News from "../components/home/News"

export const query = graphql`
  query HomePage {
    allMarkdownRemark {
      edges {
        node {
          html
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
  return (
    <Layout>
      <SEO title="Home" />
      <Onboarding />
      <News />
    </Layout>
  )
}

export default IndexPage
