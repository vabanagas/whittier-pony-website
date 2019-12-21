import { get } from "lodash"

export const parseMarkdownRemark = (data: object): object =>
  get(data, "markdownRemark")

export const parseAllMarkdownRemark = (data: object): object[] =>
  get(data, "allMarkdownRemark.edges").map((edge: object) => get(edge, "node"))
