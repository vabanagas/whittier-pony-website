import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import typography from "../../../constants/typography"
import colors from "../../../constants/colors"
import values from "../../../constants/values"
import durations from "../../../constants/durations"
import media from "../../../constants/media"

interface IStyledNavbarProps {
  fixed: boolean
  fixedPosition: number
}

const Spacer = styled.div`
  position: relative;
  height: ${values.NAVBAR_HEIGHT}px;
  background-color: ${colors.offWhite};
`

const Navbar = styled.div<IStyledNavbarProps>`
  position: ${props => (props.fixed ? "fixed" : "absolute")};
  top: ${props => (props.fixed ? `${props.fixedPosition}px` : "unset")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: ${values.NAVBAR_HEIGHT}px;
  width: 100vw;
  background-color: ${colors.offWhite};
  border-bottom: 1px solid ${colors.lightGray};
  z-index: 900;

  ${media.desktop} {
    justify-content: center;
  }
`

const NavLinkIndicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: ${colors.black};
  transform-origin: bottom center;
  transform: scaleX(0);
  will-change: transform;
  transition: transform ${durations.short} ease;
`

const NavLink = styled.a<{ active: boolean }>`
  position: relative;
  ${typography.H6};
  color: ${props => (props.active ? colors.black : colors.lightGray)};
  text-decoration: none;
  transition: color ${durations.medium} ease;
  padding: 20px 0;
  min-width: 64px;
  text-align: center;

  ${media.desktop} {
    margin: 0 24px;
    min-width: 72px;
  }

  &:hover {
    ${NavLinkIndicator} {
      transform: scaleX(1);
    }
  }
`

export interface INavbarProps {
  data: Array<{
    id: string
    name: string
    active: boolean
    onClick(): void
  }>
  fixedPosition: number
}

export default (props: INavbarProps) => {
  const [fixed, setFixed] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const onScroll = () => {
    const navbar = navbarRef.current
    if (navbar) {
      const rect = navbar.getBoundingClientRect()
      if (rect.top <= props.fixedPosition) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    }
  }

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Resize event listener
  useEffect(() => {
    window.addEventListener("resize", onScroll)
    return () => window.removeEventListener("resize", onScroll)
  }, [])

  return (
    <>
      <Navbar fixed={fixed} fixedPosition={props.fixedPosition}>
        {props.data.map(link => (
          <NavLink key={link.id} onClick={link.onClick} active={link.active}>
            {link.name}
            <NavLinkIndicator />
          </NavLink>
        ))}
      </Navbar>
      <Spacer ref={navbarRef} />
    </>
  )
}
