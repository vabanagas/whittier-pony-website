import React from "react"
import styled from "styled-components"
import { get, slice } from "lodash"
import { graphql, useStaticQuery } from "gatsby"

import colors from "../../../constants/colors"
import media from "../../../constants/media"
import { parseAllMarkdownRemark } from "../../../utils"
import Card from "../../common/Card"
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

const renderPost = (post: object) => {
  const title: string = get(post, "frontmatter.title", "")
  const date: Moment = moment(get(post, "frontmatter.date"))
  const excerpt: string = get(post, "excerpt", "")
  const details: string = get(post, "html", "")
  return (
    <Card
      key={title}
      title={title}
      excerpt={excerpt}
      date={date}
      details={details}
    />
  )
}

export interface INewsProps {
  limit?: number
}

const News = (props: INewsProps) => {
  const data = useStaticQuery(graphql`
    query News {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const posts = slice(parseAllMarkdownRemark(data), 0, props.limit)

  return (
    <Container>
      <Header>News</Header>
      <Content>{posts.map(renderPost)}</Content>
    </Container>
  )
}

export default News
