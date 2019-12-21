import styled from "styled-components"
import breakpoints from "../../../constants/breakpoints"

const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 24px;

  @media ${breakpoints.tablet} {
    padding: calc(1 / 12 * 100vw);
  }

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }

  @media ${breakpoints.largeDesktop} {
    padding: calc(1 / 12 * 100vw) calc(2 / 12 * 100vw);
  }
`

export default Block
