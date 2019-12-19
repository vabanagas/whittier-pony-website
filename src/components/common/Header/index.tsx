import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import typography from "../../../constants/typography"
import breakpoints from "../../../constants/breakpoints"
import colors from "../../../constants/colors"
import Link from "../Link"
import MenuIcon from "../../../icons/MenuIcon"
import SearchIcon from "../../../icons/SearchIcon"
import values from "../../../constants/values"
import durations from "../../../constants/durations"
import Menu from "../Menu"

interface IShowBackgroundProps {
  "data-show-background": boolean
}

interface IShowBannerProps {
  "data-show-banner": boolean
}

const Banner = styled.div<IShowBannerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${values.BANNER_HEIGHT}px;
  z-index: 1000;
  display: ${props => (props[`data-show-banner`] ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  ${typography.SmallCaps};
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  padding: 0 24px;
  text-align: center;

  @media ${breakpoints.desktop} {
    padding: 0 48px;
  }
`

const Header = styled.header<IShowBannerProps>`
  position: fixed;
  top: ${props =>
    props[`data-show-banner`] ? `${values.BANNER_HEIGHT}px` : 0};
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

const NavLinkIndicator = styled.div<IShowBackgroundProps>`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: ${props =>
    props[`data-show-background`] ? colors.black : colors.offWhite};
  transform-origin: bottom center;
  transform: scaleX(0);
  will-change: transform;
  transition: transform ${durations.short};
`

const NavLink = styled(GatsbyLink)<IShowBackgroundProps>`
  display: none;

  @media ${breakpoints.desktop} {
    display: initial;
    position: relative;
    ${typography.H5};
    color: ${props =>
      props[`data-show-background`] ? colors.black : colors.offWhite};
    text-decoration: none;
    margin-right: 46px;
    transition: color ${durations.medium};

    &:hover {
      ${NavLinkIndicator} {
        transform: scaleX(1);
      }
    }
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

const StyledSearchIcon = styled(SearchIcon)<IShowBackgroundProps>`
  cursor: pointer;
  margin-right: 24px;
  color: ${props =>
    props[`data-show-background`] ? colors.black : colors.offWhite};
  transition: stroke ${durations.medium};

  @media ${breakpoints.desktop} {
    margin-right: 32px;
    margin-left: 48px;
  }
`

const StyledMenuIcon = styled(MenuIcon)<IShowBackgroundProps>`
  cursor: pointer;
  color: ${props =>
    props[`data-show-background`] ? colors.black : colors.offWhite};
  transition: stroke ${durations.medium};
  z-index: 1011;
`

export interface IHeaderProps {
  banner?: string
  siteTitle?: string
  lightContent?: boolean
}

export default ({ banner, lightContent, siteTitle = `` }: IHeaderProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  const showBanner = banner !== undefined && banner.length > 0

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pony-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid_withWebp
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

  const closeMenu = () => {
    setShowMenu(false)
  }

  const openMenu = () => {
    setShowMenu(true)
  }

  return (
    <>
      <Banner data-show-banner={showBanner}>{banner}</Banner>
      <Header data-show-banner={showBanner}>
        <HeaderBackground
          data-show-background={lightContent || showBackground}
        />
        <HeaderContent>
          <GatsbyLink to="/">
            <Logo
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt={siteTitle}
            />
          </GatsbyLink>
          <Content>
            <NavLink
              to="/about"
              data-show-background={lightContent || showBackground}
            >
              About
              <NavLinkIndicator
                data-show-background={lightContent || showBackground}
              />
            </NavLink>
            <NavLink
              to="/divisions"
              data-show-background={lightContent || showBackground}
            >
              Divisions
              <NavLinkIndicator
                data-show-background={lightContent || showBackground}
              />
            </NavLink>
            <NavLink
              to="/schedules"
              data-show-background={lightContent || showBackground}
            >
              Schedules
              <NavLinkIndicator
                data-show-background={lightContent || showBackground}
              />
            </NavLink>
            <RegisterButton
              href="https://wpb.sportssignup.com/site/"
              target="__blank"
              dark={lightContent || showBackground}
            >
              Register
            </RegisterButton>
            <StyledSearchIcon
              data-show-background={lightContent || showBackground}
            />
            <StyledMenuIcon
              data-show-background={lightContent || showBackground}
              onClick={openMenu}
            />
          </Content>
        </HeaderContent>
        <Menu isOpen={showMenu} onRequestClose={closeMenu} />
      </Header>
    </>
  )
}
