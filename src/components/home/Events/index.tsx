import React from "react"
import styled from "styled-components"
import { get, slice } from "lodash"
import { graphql, useStaticQuery } from "gatsby"

import colors from "../../../constants/colors"
import media from "../../../constants/media"
import { parseAllMarkdownRemark } from "../../../utils"
import Event from "../../common/Event"
import moment, { Moment } from "moment"
import Block from "../../common/Block"
import typography from "../../../constants/typography"

const Container = styled(Block)`
  flex-direction: column;
  background-color: ${colors.offWhite};
`

const Header = styled.div`
  ${typography.H3};
  color: ${colors.black};
  margin-bottom: 48px;

  ${media.tablet} {
    margin-bottom: calc(0.5 / 12 * 100vw);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const isFutureEvent = (event: object) => {
  const today = moment()
  const eventDate = moment(get(event, "frontmatter.date"))
  return today <= eventDate
}

const renderEvent = (event: object) => {
  const title: string = get(event, "frontmatter.title", "")
  const description: string = get(event, "frontmatter.description", "")
  const date: Moment = moment(get(event, "frontmatter.date"))
  const location: string = get(event, "frontmatter.location", "")

  return (
    <Event
      key={title}
      title={title}
      description={description}
      date={date}
      location={location}
    />
  )
}

export interface IEventsProps {
  limit?: number
}

const Events = (props: IEventsProps) => {
  const data = useStaticQuery(graphql`
    query Events {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/events/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date
              location
            }
          }
        }
      }
    }
  `)

  const events = slice(parseAllMarkdownRemark(data), 0, props.limit)
  const futureEvents = events.filter(isFutureEvent)

  return (
    <Container>
      <Header>Events</Header>
      <Content>{futureEvents.map(renderEvent)}</Content>
    </Container>
  )
}

export default Events
