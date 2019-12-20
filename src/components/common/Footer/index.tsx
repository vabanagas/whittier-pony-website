import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import typography from "../../../constants/typography"
import breakpoints from "../../../constants/breakpoints"
import colors from "../../../constants/colors"
import durations from "../../../constants/durations"

const Container = styled.footer`
  width: 100vw;
  background-color: ${colors.black};
  padding: 24px;

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media ${breakpoints.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: calc(1 / 12 * 100vw);
  }
`

const NavLinkIndicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: ${colors.offWhite};
  transform-origin: bottom center;
  transform: scaleX(0);
  will-change: transform;
  transition: transform ${durations.medium} ease;
`

const NavLink = styled(Link)`
  position: relative;
  ${typography.H4};
  color: ${colors.offWhite};
  text-decoration: none;
  margin-bottom: 24px;

  @media ${breakpoints.desktop} {
    ${typography.H3};
    color: ${colors.offWhite};
    margin-bottom: 0;
    margin-right: 46px;
  }

  &:hover {
    ${NavLinkIndicator} {
      transform: scaleX(1);
    }
  }
`

const Footer = () => {
  return (
    <Container>
      <Content>
        <NavLinks>
          <NavLink to="/">
            Home
            <NavLinkIndicator />
          </NavLink>
          <NavLink to="/about">
            About
            <NavLinkIndicator />
          </NavLink>
          <NavLink to="/divisions">
            Divisions
            <NavLinkIndicator />
          </NavLink>
          <NavLink to="/schedules">
            Schedules
            <NavLinkIndicator />
          </NavLink>
          <NavLink to="/shop">
            Shop
            <NavLinkIndicator />
          </NavLink>
          <NavLink to="/resources">
            Resources
            <NavLinkIndicator />
          </NavLink>
        </NavLinks>
      </Content>
    </Container>
  )
}

export default Footer
