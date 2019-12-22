import { createGlobalStyle } from "styled-components"
import typography from "../constants/typography"
import "../fonts/stylesheet.css"
import durations from "../constants/durations"
import breakpoints from "../constants/media"

const GlobalStyle = createGlobalStyle`
  h1 {
    ${typography.H2}
    ${breakpoints.desktop} {
      ${typography.H1}
    }
  }

  h2 {
    ${typography.H3}
    ${breakpoints.desktop} {
      ${typography.H2}
    }
  }

  h3 {
    ${typography.H4}
    ${breakpoints.desktop} {
      ${typography.H3}
    }
  }

  h4 {
    ${typography.H5}
    ${breakpoints.desktop} {
      ${typography.H4}
    }
  }

  h5 {
    ${typography.H6}
    ${breakpoints.desktop} {
      ${typography.H5}
    }
  }

  h6 {
    ${typography.H6}
  }

  html, body {
    ${typography.Body}
  }

  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity ${durations.long} ease;
      will-change: opacity;
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
