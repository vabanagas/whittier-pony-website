import React from "react"
import styled from "styled-components"
import Modal from "react-modal"
import { Link as GatsbyLink } from "gatsby"

import colors from "../../../constants/colors"
import breakpoints from "../../../constants/breakpoints"
import values from "../../../constants/values"
import typography from "../../../constants/typography"

const Header = styled.div`
  position: absolute;
  height: ${values.HEADER_HEIGHT}px;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;

  @media ${breakpoints.desktop} {
    padding: 0 48px;
  }
`

const Content = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 24px;

  @media ${breakpoints.desktop} {
    align-items: flex-start;
    padding: calc(1 / 12 * 100vw);
  }
`

const NavLink = styled(GatsbyLink)`
  ${typography.H4};
  color: ${colors.offWhite};
  text-decoration: none;

  @media ${breakpoints.desktop} {
    ${typography.H3};
    color: ${colors.offWhite};
  }
`

interface IProps extends ReactModal.Props {
  className?: string
  modalClassName?: string
}

Modal.setAppElement("#___gatsby")

const ModalAdapter = ({ className, modalClassName, ...props }: IProps) => {
  return (
    <Modal
      className={modalClassName}
      portalClassName={className}
      closeTimeoutMS={500}
      {...props}
    >
      <Content>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/divisions">Divisions</NavLink>
        <NavLink to="/schedules">Schedules</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </Content>
      <Header />
    </Modal>
  )
}

const Menu = styled(ModalAdapter).attrs({
  overlayClassName: "Overlay",
  modalClassName: "Modal",
})`
  .Modal {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${colors.blue};
  }
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1010;
  }
`

export default Menu
