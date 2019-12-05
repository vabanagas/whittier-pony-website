import styled from "styled-components"
import colors from "../../constants/colors"
import typography from "../../constants/typography"
import durations from "../../constants/durations"

interface IButton {
  dark?: boolean
}

const Button = styled.button<IButton>`
  ${typography.Button}
  height: 56px;
  padding: 0 36px;
  border: 1px solid ${colors.black};
  border-color: ${props => (props.dark ? colors.white : colors.black)};
  background-color: transparent;
  color: ${props => (props.dark ? colors.white : colors.black)};
  outline-color: ${props => (props.dark ? colors.white : colors.black)};
  transition: color ${durations.short}, background-color ${durations.short};

  &:hover {
    background-color: ${props => (props.dark ? colors.white : colors.black)};
    color: ${props => (props.dark ? colors.black : colors.white)};
  }
`

export default Button
