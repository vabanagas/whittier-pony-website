import React from "react"
import styled from "styled-components"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import values from "../constants/values"
import media from "../constants/media"

const Container = styled.div`
  position: relative;
  width: 100vw;
  padding-top: ${values.HEADER_HEIGHT}px;
`

const Content = styled.div`
  padding: 24px;

  ${media.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const NotFoundPage = () => (
  <Layout lightContent={true}>
    <SEO title="404: Not found" />
    <Container>
      <Content>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </Content>
    </Container>
  </Layout>
)

export default NotFoundPage
