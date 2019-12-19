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
import GlobalStyle from "../../../styles/GlobalStyle"

const Main = styled.main``

export interface ILayoutProps {
  banner?: string
  lightContent?: boolean
  children: React.ReactNode
}

const Layout = ({ banner, lightContent, children }: ILayoutProps) => {
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
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        banner={banner}
        lightContent={lightContent}
      />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
