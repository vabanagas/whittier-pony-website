import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import typography from "../../../constants/typography"
import breakpoints from "../../../constants/breakpoints"
import colors from "../../../constants/colors"
import durations from "../../../constants/durations"
import { get } from "lodash"

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

const Fields = styled.div`
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

const Field = styled.div``

const FieldTitle = styled.div`
  ${typography.BodyBold};
  color: ${colors.offWhite};
  margin-bottom: 8px;
`

const FieldAddress = styled.div`
  ${typography.Body};
  color: ${colors.offWhite};
`

const Copyright = styled.div`
  ${typography.Subtext};
  color: ${colors.offWhite};
`

const renderField = (field: object) => {
  const title = get(field, "title", "")
  const address = get(field, "field", "")
  const rainOutNumber = get(field, "rainOutNumber", "")

  return (
    <Field>
      <FieldTitle>{title}</FieldTitle>
      <FieldAddress>{address}</FieldAddress>
    </Field>
  )
}

const parseFields = (data: object) =>
  get(data, "allFile.edges", []).map((edge: object) =>
    get(edge, "node.childMarkdownRemark.frontmatter")
  )

const Footer = () => {
  const data: object = useStaticQuery(graphql`
    query Footer {
      allFile(filter: { sourceInstanceName: { eq: "fields" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                address
                rainOutNumber
              }
            }
          }
        }
      }
    }
  `)

  const fields: object[] = parseFields(data)

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
        {fields.length > 0 && (
          <Fields>{fields.map(field => renderField(field))}</Fields>
        )}
        <Copyright>© 2019 Whittier Pony. All Rights Reserved.</Copyright>
      </Content>
    </Container>
  )
}

export default Footer
