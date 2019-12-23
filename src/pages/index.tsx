import React, { useState } from "react"
import { graphql } from "gatsby"
import { get } from "lodash"

import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"
import Onboarding from "../components/home/Onboarding"
import News from "../components/home/News"
import Navbar, { INavbarProps } from "../components/common/Navbar"
import values from "../constants/values"

export const query = graphql`
  query HomePage {
    markdownRemark(fileAbsolutePath: { regex: "/pages/home.md/" }) {
      frontmatter {
        title
        subtitle
        banner
        image {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export type HomeFilters = "all" | "news" | "events" | "live"

const parseQuery = (data: object) => get(data, "markdownRemark.frontmatter")

const IndexPage = ({ data }: { data: object }) => {
  const [filter, setFilter] = useState<HomeFilters>("all")
  const result = parseQuery(data)
  const title = get(result, "title", "")
  const subtitle = get(result, "subtitle", "")
  const banner = get(result, "banner", "")
  const image = get(result, "image.childImageSharp.fluid")

  const NavbarProps: INavbarProps = {
    data: [
      {
        id: "all",
        name: "All",
        active: filter === "all",
        onClick: () => setFilter("all"),
      },
      {
        id: "news",
        name: "News",
        active: filter === "news",
        onClick: () => setFilter("news"),
      },
      {
        id: "events",
        name: "Events",
        active: filter === "events",
        onClick: () => setFilter("events"),
      },
      {
        id: "live",
        name: "Live",
        active: filter === "live",
        onClick: () => setFilter("live"),
      },
    ],
    fixedPosition:
      banner !== undefined && banner.length > 0
        ? values.BANNER_HEIGHT + values.HEADER_HEIGHT
        : values.HEADER_HEIGHT,
  }

  return (
    <Layout banner={banner}>
      <SEO title="Home" />
      <Onboarding title={title} subtitle={subtitle} image={image} />
      <Navbar {...NavbarProps} />
      {filter === "all" && <News limit={3} />}
      {filter === "news" && <News />}
    </Layout>
  )
}

export default IndexPage
