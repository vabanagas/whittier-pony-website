import React from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Body from "../components/about/Body"
import { parseMarkdownRemark } from "../utils"

export const query = graphql`
  query AboutPage {
    markdownRemark(fileAbsolutePath: { regex: "/pages/about.md/" }) {
      html
    }
  }
`

const AboutPage = ({ data }: { data: object }) => {
  const aboutMD = parseMarkdownRemark(data)
  const html = get(aboutMD, "html")

  return (
    <Layout lightContent={true}>
      <SEO title="About" />
      <Body html={html} />
    </Layout>
  )
}

export default AboutPage
