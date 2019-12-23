import { createGlobalStyle } from "styled-components"
import typography from "../constants/typography"
import "../fonts/stylesheet.css"
import durations from "../constants/durations"
import media from "../constants/media"
import colors from "../constants/colors"

const GlobalStyle = createGlobalStyle`
  h1 {
    ${typography.H2}
    ${media.desktop} {
      ${typography.H1}
    }
  }

  h2 {
    ${typography.H3}
    ${media.desktop} {
      ${typography.H2}
    }
  }

  h3 {
    ${typography.H4}
    ${media.desktop} {
      ${typography.H3}
    }
  }

  h4 {
    ${typography.H5}
    ${media.desktop} {
      ${typography.H4}
    }
  }

  h5 {
    ${typography.H6}
    ${media.desktop} {
      ${typography.H5}
    }
  }

  h6 {
    ${typography.H6}
  }

  html, body {
    ${typography.Body}
    background-color: ${colors.offWhite}
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
