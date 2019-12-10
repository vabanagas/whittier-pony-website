import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import typography from "../../../constants/typography"
import breakpoints from "../../../constants/breakpoints"
import colors from "../../../constants/colors"
import Link from "../Link"
import Menu from "../../../icons/Menu"
import Search from "../../../icons/Search"
import values from "../../../constants/values"
import durations from "../../../constants/durations"

interface IShowBackgroundProps {
  "data-show-background": boolean
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${values.HEADER_HEIGHT}px;
  z-index: 1000;
`

const HeaderBackground = styled.div<IShowBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid ${colors.lightGray};
  background-color: ${colors.offWhite};
  opacity: ${props => (props[`data-show-background`] ? 1 : 0)};
  transition: opacity ${durations.medium};
  will-change: opacity;
`

const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media ${breakpoints.desktop} {
    padding: 0 48px;
  }
`

const NavLink = styled(GatsbyLink)<IShowBackgroundProps>`
  display: none;

  @media ${breakpoints.desktop} {
    display: initial;
    ${typography.H5};
    color: ${props =>
      props[`data-show-background`] ? colors.black : colors.offWhite};
    text-decoration: none;
    margin-right: 46px;
    transition: color ${durations.medium};
  }
`

const RegisterButton = styled(Link)`
  display: none;

  @media ${breakpoints.desktop} {
    display: initial;
  }
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

const SearchIcon = styled(Search)<IShowBackgroundProps>`
  margin-right: 24px;
  color: ${props =>
    props[`data-show-background`] ? colors.black : colors.offWhite};
  transition: stroke ${durations.medium};

  @media ${breakpoints.desktop} {
    margin-right: 32px;
    margin-left: 48px;
  }
`

const MenuIcon = styled(Menu)<IShowBackgroundProps>`
  color: ${props =>
    props[`data-show-background`] ? colors.black : colors.offWhite};
  transition: stroke ${durations.medium};
`

interface IHeader {
  siteTitle?: string
}

export default ({ siteTitle = `` }: IHeader) => {
  const [showBackground, setShowBackground] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pony-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const onScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > values.HEADER_HEIGHT) {
      setShowBackground(true)
    } else {
      setShowBackground(false)
    }
  }

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Resize event listener
  useEffect(() => {
    window.addEventListener("resize", onScroll)
    return () => window.removeEventListener("resize", onScroll)
  }, [])

  return (
    <Header>
      <HeaderBackground data-show-background={showBackground} />
      <HeaderContent>
        <GatsbyLink to="/">
          <Logo
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt={siteTitle}
          />
        </GatsbyLink>
        <Content>
          <NavLink to="/about" data-show-background={showBackground}>
            About
          </NavLink>
          <NavLink to="/divisions" data-show-background={showBackground}>
            Divisions
          </NavLink>
          <NavLink to="/schedules" data-show-background={showBackground}>
            Schedules
          </NavLink>
          <RegisterButton
            href="https://wpb.sportssignup.com/site/"
            target="__blank"
            dark={showBackground}
          >
            Register
          </RegisterButton>
          <SearchIcon data-show-background={showBackground} />
          <MenuIcon data-show-background={showBackground} />
        </Content>
      </HeaderContent>
    </Header>
  )
}
