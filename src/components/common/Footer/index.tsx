import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import moment from "moment"

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
  width: fit-content;

  @media ${breakpoints.desktop} {
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

const Field = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media ${breakpoints.desktop} {
    width: calc(2 / 12 * 100vw);
    margin-bottom: 0;
  }
`

const FieldTitle = styled.div`
  ${typography.SmallCaps};
  color: ${colors.offWhite};
  margin-bottom: 4px;
`

const FieldAddress = styled.div`
  ${typography.Subtext};
  color: ${colors.offWhite};
  white-space: pre-wrap;
  margin-bottom: 8px;

  @media ${breakpoints.desktop} {
    margin-bottom: 32px;
  }
`

const FieldNumberTitle = styled.div`
  ${typography.SmallCaps};
  color: ${colors.offWhite};
`

const FieldNumber = styled.a`
  ${typography.Subtext};
  color: ${colors.offWhite};
`

const Copyright = styled.div`
  ${typography.Subtext};
  color: ${colors.offWhite};
`

const renderField = (field: object) => {
  const title = get(field, "title", "")
  const address = get(field, "address", "")
  const rainOutNumber = get(field, "rainOutNumber", "")

  return (
    <Field key={title}>
      <FieldTitle>{title}</FieldTitle>
      <FieldAddress>{address}</FieldAddress>
      <FieldNumberTitle>Rain Out Number</FieldNumberTitle>
      <FieldNumber href={`tel:${rainOutNumber}`}>{rainOutNumber}</FieldNumber>
    </Field>
  )
}

const parseFields = (data: object) =>
  get(data, "allMarkdownRemark.edges", []).map((edge: object) =>
    get(edge, "node.frontmatter")
  )

const Footer = () => {
  const data: object = useStaticQuery(graphql`
    query Footer {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/fields/" } }) {
        edges {
          node {
            frontmatter {
              title
              address
              rainOutNumber
            }
          }
        }
      }
    }
  `)

  const fields: object[] = parseFields(data)
  const year: string = moment().format("YYYY")

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
        <Copyright>{`© ${year} Whittier Pony. All Rights Reserved.`}</Copyright>
      </Content>
    </Container>
  )
}

export default Footer
