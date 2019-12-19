import React from "react"
import styled from "styled-components"
import Modal from "react-modal"
import { Link as GatsbyLink } from "gatsby"

import colors from "../../../constants/colors"
import breakpoints from "../../../constants/breakpoints"
import values from "../../../constants/values"
import typography from "../../../constants/typography"
import MenuIcon from "../../../icons/MenuIcon"
import durations from "../../../constants/durations"

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
  align-items: flex-start;
  padding: 24px;

  @media ${breakpoints.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const NavLinkIndicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: ${colors.offWhite};
  transform-origin: bottom center;
  transform: scaleX(0);
  will-change: transform;
  transition: transform ${durations.medium};
`

const NavLink = styled(GatsbyLink)`
  position: relative;
  ${typography.H4};
  color: ${colors.offWhite};
  text-decoration: none;

  @media ${breakpoints.desktop} {
    ${typography.H3};
    color: ${colors.offWhite};
  }

  &:hover {
    ${NavLinkIndicator} {
      transform: scaleX(1);
    }
  }
`

const StyledMenuIcon = styled(MenuIcon)<{ "data-is-open": boolean }>`
  cursor: pointer;
  color: ${colors.offWhite};

  line {
    transition: transform ${durations.long};
    will-change: transform;
  }

  line:first-child {
    transform-origin: center;
    transform: ${props =>
      props[`data-is-open`]
        ? `rotate(45deg) translateY(5px)`
        : `rotate(0) translateY(0)`};
  }

  line:last-child {
    transform-origin: center;
    transform: ${props =>
      props[`data-is-open`]
        ? `rotate(-45deg) scaleX(1.5) translateY(-4px) translateX(4px)`
        : `rotate(0) scaleX(1) translateY(0) translateX(0)`};
  }
`

export interface IMenuProps extends ReactModal.Props {
  className?: string
  modalClassName?: string
}

Modal.setAppElement("#___gatsby")

const ModalAdapter = ({ className, modalClassName, ...props }: IMenuProps) => {
  return (
    <Modal
      className={modalClassName}
      portalClassName={className}
      closeTimeoutMS={500}
      {...props}
    >
      <Content>
        <NavLink to="/" onClick={props.onRequestClose}>
          Home
          <NavLinkIndicator />
        </NavLink>
        <NavLink to="/about" onClick={props.onRequestClose}>
          About
          <NavLinkIndicator />
        </NavLink>
        <NavLink to="/divisions" onClick={props.onRequestClose}>
          Divisions
          <NavLinkIndicator />
        </NavLink>
        <NavLink to="/schedules" onClick={props.onRequestClose}>
          Schedules
          <NavLinkIndicator />
        </NavLink>
        <NavLink to="/shop" onClick={props.onRequestClose}>
          Shop
          <NavLinkIndicator />
        </NavLink>
        <NavLink to="/resources" onClick={props.onRequestClose}>
          Resources
          <NavLinkIndicator />
        </NavLink>
      </Content>
      <Header>
        <StyledMenuIcon
          onClick={props.onRequestClose}
          data-is-open={props.isOpen}
        />
      </Header>
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
