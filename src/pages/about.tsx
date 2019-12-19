import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"

export const query = graphql`
  query AboutPage {
    file(sourceInstanceName: { eq: "pages" }, name: { eq: "about" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

const renderBody = (body: React.ReactNode) => {
  return body
}

const parseQuery = (data: object) =>
  get(data, "file.childMarkdownRemark.frontmatter")

const AboutPage = ({ data }: { data: object }) => {
  const result = parseQuery(data)
  const body = get(result, "banner", null)

  return (
    <Layout lightContent={true}>
      <SEO title="About" />
      {renderBody(body)}
    </Layout>
  )
}

export default AboutPage
