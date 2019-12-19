import { css } from "styled-components"
import colors from "./colors"

const Display = css`
  font-family: "Proxima Nova A";
  font-style: normal;
  font-weight: 900;
  font-size: 84px;
  line-height: 96px;
  margin: 0;
  color: ${colors.black};
`

const H1 = css`
  font-family: "Proxima Nova A";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  margin: 0;
  color: ${colors.black};
`

const H2 = css`
  font-family: "Proxima Nova A";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;
  margin: 0;
  color: ${colors.black};
`

const H3 = css`
  font-family: "Proxima Nova A";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 32px;
  margin: 0;
  color: ${colors.black};
`

const H4 = css`
  font-family: "Proxima Nova A";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  color: ${colors.black};
`

const H5 = H4

const H6 = H4

const BodyBold = css`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  color: ${colors.black};
`

const Body = css`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${colors.black};
`

const Subtext = css`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  color: ${colors.black};
`

const SmallCaps = css`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin: 0;
  color: ${colors.black};
`

const Button = css`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin: 0;
  color: ${colors.black};
`

export default {
  Display,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BodyBold,
  Body,
  Subtext,
  SmallCaps,
  Button,
}
