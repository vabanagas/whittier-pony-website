import { createGlobalStyle } from "styled-components"
import typography from "../constants/typography"
import "../fonts/stylesheet.css"
import durations from "../constants/durations"

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

  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity ${durations.long};
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }
`

export default GlobalStyle
