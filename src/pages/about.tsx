import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Body from "../components/about/Body"

export const query = graphql`
  query AboutPage {
    markdownRemark(fileAbsolutePath: { regex: "/pages/about.md/" }) {
      html
    }
  }
`

const parseQuery = (data: object) => get(data, "markdownRemark.html")

const AboutPage = ({ data }: { data: object }) => {
  const result = parseQuery(data)

  return (
    <Layout lightContent={true}>
      <SEO title="About" />
      <Body html={result} />
    </Layout>
  )
}

export default AboutPage
