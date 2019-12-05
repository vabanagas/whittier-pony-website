/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "sanitize.css"

import Header from "../Header"
import breakpoints from "../../constants/breakpoints"

const Main = styled.main`
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  padding-top: calc(144px + 24px);

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
    padding-top: calc(144px + 1 / 12 * 100vw);
  }
`

interface ILayout {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
