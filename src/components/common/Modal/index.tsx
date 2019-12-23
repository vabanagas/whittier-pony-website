import React from "react"
import styled from "styled-components"
import Modal from "react-modal"

import colors from "../../../constants/colors"
import media from "../../../constants/media"
import values from "../../../constants/values"
import CloseIcon from "../../../icons/CloseIcon"
import typography from "../../../constants/typography"
import ArrowIcon from "../../../icons/ArrowIcon"

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: ${values.HEADER_HEIGHT}px;

  ${media.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Title = styled.div`
  ${typography.H4};
  color: ${colors.black};
  margin: 32px 0;

  ${media.desktop} {
    margin: 0;
  }
`

const Close = styled(CloseIcon)`
  display: none;
  cursor: pointer;
  height: 48px;
  width: 48px;
  color: ${colors.black};

  ${media.desktop} {
    display: block;
  }
`

const Arrow = styled(ArrowIcon)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  transform: rotate(180deg);

  ${media.desktop} {
    display: none;
  }
`

export interface IModalProps extends ReactModal.Props {
  className?: string
  modalClassName?: string
  children: React.ReactNode
}

Modal.setAppElement("#___gatsby")

const ModalAdapter = ({
  className,
  modalClassName,
  children,
  ...props
}: IModalProps) => {
  return (
    <Modal
      className={modalClassName}
      portalClassName={className}
      closeTimeoutMS={500}
      shouldCloseOnOverlayClick={true}
      {...props}
    >
      <Header>
        <Arrow onClick={props.onRequestClose} />
        <Title>{props.contentLabel}</Title>
        <Close onClick={props.onRequestClose} />
      </Header>
      <Content>{children}</Content>
    </Modal>
  )
}

export default styled(ModalAdapter).attrs({
  overlayClassName: "Overlay",
  modalClassName: "Modal",
})`
  .Modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    z-index: 1010;
    background-color: ${colors.offWhite};
    border: 1px solid ${colors.lightGray};
    outline-color: ${colors.lightGray};
    padding: 48px 24px;

    ${media.tablet} {
      padding: calc(0.5 / 12 * 100vw);
    }

    ${media.desktop} {
      min-height: calc(100vh - 2 / 12 * 100vw);
      margin: calc(1 / 12 * 100vw) calc(2 / 12 * 100vw);
      padding: calc(0.5 / 12 * 100vw);
    }

    ${media.largeDesktop} {
      min-height: calc(100vh - 2 / 12 * 100vw);
      margin: calc(1 / 12 * 100vw) calc(2 / 12 * 100vw);
      padding: calc(0.5 / 12 * 100vw) calc(1 / 12 * 100vw);
    }
  }
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1010;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: auto;
  }
`
