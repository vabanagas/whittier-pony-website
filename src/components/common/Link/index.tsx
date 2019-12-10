import styled from "styled-components"
import colors from "../../../constants/colors"
import typography from "../../../constants/typography"
import durations from "../../../constants/durations"

interface ILink {
  dark?: boolean
}

const Link = styled.a<ILink>`
  ${typography.Button}
  padding: 15px 36px;
  text-align: center;
  border: 1px solid ${colors.black};
  border-color: ${props => (props.dark ? colors.black : colors.offWhite)};
  background-color: transparent;
  color: ${props => (props.dark ? colors.black : colors.offWhite)};
  outline-color: ${props => (props.dark ? colors.black : colors.offWhite)};
  transition: color ${durations.short}, background-color ${durations.short},
    outline-color ${durations.short};
  text-decoration: none;

  &:hover {
    background-color: ${props => (props.dark ? colors.black : colors.offWhite)};
    color: ${props => (props.dark ? colors.offWhite : colors.black)};
    text-decoration: none;
  }
`

export default Link
