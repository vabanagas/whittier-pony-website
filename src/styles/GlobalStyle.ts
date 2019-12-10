import { createGlobalStyle } from "styled-components"
import typography from "../constants/typography"
import "../fonts/stylesheet.css"

const GlobalStyle = createGlobalStyle`
  h1 {
    ${typography.H1}
  }

  h2 {
    ${typography.H2}
  }

  h3 {
    ${typography.H3}
  }

  h4 {
    ${typography.H4}
  }

  h5 {
    ${typography.H5}
  }

  h6 {
    ${typography.H6}
  }

  html, body {
    ${typography.Body}
  }
`

export default GlobalStyle
