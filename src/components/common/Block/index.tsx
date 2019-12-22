import styled from "styled-components"
import breakpoints from "../../../constants/media"

const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 48px 24px;

  ${breakpoints.tablet} {
    padding: calc(1 / 12 * 100vw);
  }

  ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }

  ${breakpoints.largeDesktop} {
    padding: calc(1 / 12 * 100vw) calc(2 / 12 * 100vw);
  }
`

export default Block
