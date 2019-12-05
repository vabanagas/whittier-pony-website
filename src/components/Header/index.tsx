import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import typography from "../../constants/typography"
import colors from "../../constants/colors"
import Button from "../Button"
import Menu from "../../icons/Menu"
import Search from "../../icons/Search"

const Header = styled.header`
  background: rebeccapurple;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 144px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  z-index: 1000;
`

const NavLink = styled(Link)`
  ${typography.H5};
  color: ${colors.white};
  text-decoration: none;
  margin-right: 46px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled(Img)`
  height: 72px;
  width: 72px;
`

const SearchIcon = styled(Search)`
  color: ${colors.white};
  margin-right: 32px;
  margin-left: 48px;
`

const MenuIcon = styled(Menu)`
  color: ${colors.white};
`

interface IHeader {
  siteTitle?: string
}

export default ({ siteTitle = `` }: IHeader) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pony-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Header>
      <Link to="/">
        <Logo
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt={siteTitle}
        />
      </Link>
      <Content>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Divisions</NavLink>
        <NavLink to="/">Schedules</NavLink>
        <Button>Register</Button>
        <SearchIcon />
        <MenuIcon />
      </Content>
    </Header>
  )
}
