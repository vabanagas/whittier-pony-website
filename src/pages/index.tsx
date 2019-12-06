import React from "react"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Onboarding from "../components/home/Onboarding"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Onboarding />
  </Layout>
)

export default IndexPage
