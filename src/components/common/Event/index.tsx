import React from "react"
import styled from "styled-components"
import media from "../../../constants/media"
import typography from "../../../constants/typography"
import colors from "../../../constants/colors"
import { Moment } from "moment"

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.offWhite};
  margin: 24px 0;

  ${media.tablet} {
    width: calc(4.5 / 12 * 100vw);
    margin: calc(0.25 / 12 * 100vw);
    padding: calc(0.5 / 12 * 100vw);
  }

  ${media.desktop} {
    width: calc(3 / 12 * 100vw);
    margin: calc(0.333 / 2 / 12 * 100vw);
    padding: calc(0.25 / 12 * 100vw);
  }

  ${media.largeDesktop} {
    width: calc(1.75 / 12 * 100vw);
    margin: calc(0.25 / 2 / 12 * 100vw);
    padding: calc(0.25 / 12 * 100vw);
  }
`

const Title = styled.div`
  ${typography.BodyBold};
  color: ${colors.black};
  margin-top: 24px;
`

const Header = styled.div`
  ${typography.SmallCaps};
  color: ${colors.black};
  margin-top: 24px;
`

const Description = styled.div`
  ${typography.Subtext};
  color: ${colors.black};
  white-space: pre-wrap;
`

const Location = styled.div`
  ${typography.Subtext};
  color: ${colors.black};
  white-space: pre-wrap;
`

const Date = styled.div`
  ${typography.SmallCaps};
  color: ${colors.black};
`

export interface IEventProps {
  title: string
  description: string
  date: Moment
  location: string
}

const Event = (props: IEventProps) => {
  const date = props.date.format("MMMM D, YYYY")
  const time = props.date.format("h:mm A")
  return (
    <Container>
      <Date>{date}</Date>
      {time !== "12:00 AM" && <Date>{time}</Date>}
      <Title>{props.title}</Title>
      {props.description && (
        <>
          <Header>Description</Header>
          <Description>{props.description}</Description>
        </>
      )}
      <Header>Location</Header>
      <Location>{props.location}</Location>
    </Container>
  )
}

export default Event
