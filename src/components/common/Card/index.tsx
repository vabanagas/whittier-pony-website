import React, { useState } from "react"
import styled from "styled-components"
import breakpoints from "../../../constants/breakpoints"
import typography from "../../../constants/typography"
import colors from "../../../constants/colors"
import { Moment } from "moment"
import ArrowIcon from "../../../icons/ArrowIcon"
import durations from "../../../constants/durations"

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${colors.offWhite};
  margin: 24px 0;

  @media ${breakpoints.tablet} {
    width: calc(4.5 / 12 * 100vw);
    margin: calc(0.25 / 12 * 100vw);
    padding: calc(0.5 / 12 * 100vw);
  }

  @media ${breakpoints.desktop} {
    width: calc(3 / 12 * 100vw);
    margin: calc(0.333 / 2 / 12 * 100vw);
    padding: calc(0.25 / 12 * 100vw);
  }

  @media ${breakpoints.largeDesktop} {
    width: calc(1.75 / 12 * 100vw);
    margin: calc(0.25 / 2 / 12 * 100vw);
    padding: calc(0.25 / 12 * 100vw);
  }
`

const Title = styled.div`
  ${typography.BodyBold};
  color: ${colors.black};
`

const Excerpt = styled.div`
  ${typography.Body};
  color: ${colors.black};
  margin: 24px 0;
`

const Date = styled.div`
  ${typography.SmallCaps};
  color: ${colors.black};
  margin-bottom: 40px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`

const More = styled.div`
  ${typography.SmallCaps};
  color: ${colors.black};
`

const Arrow = styled(ArrowIcon)`
  color: ${colors.black};
  height: 24px;
  width: 24px;
  margin: 0 8px;
  transition: transform ${durations.short} ease;
  will-change: transform;

  ${Container}:hover && {
    transform: translateX(8px);
  }
`

export interface ICardProps {
  title: string
  date: Moment
  excerpt: string
  details: string
}

const Card = (props: ICardProps) => {
  const [showDetails, setShowDetails] = useState(false)

  const onClickCard = () => setShowDetails(true)

  return (
    <Container onClick={onClickCard}>
      <Title>{props.title}</Title>
      <Excerpt>{props.excerpt}</Excerpt>
      <Date>{props.date.format("MMMM D, YYYY")}</Date>
      <Footer>
        <More>More Details</More>
        <Arrow />
      </Footer>
    </Container>
  )
}

export default Card
