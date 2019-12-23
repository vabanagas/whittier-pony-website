import React from "react"
import styled from "styled-components"
import GatsbyImage, { FluidObject } from "gatsby-image"

import colors from "../../../constants/colors"
import media from "../../../constants/media"
import typography from "../../../constants/typography"
import FacebookIcon from "../../../icons/FacebookIcon"
import InstagramIcon from "../../../icons/InstagramIcon"

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${colors.black};
  opacity: 0.5;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 24px;

  ${media.desktop} {
    padding: calc(1 / 12 * 100vw);
  }
`

const Title = styled.div`
  ${typography.H1};
  color: ${colors.offWhite};

  ${media.desktop} {
    ${typography.Display};
    color: ${colors.offWhite};
  }
`

const Subtitle = styled.div`
  ${typography.H3};
  color: ${colors.lightGray};

  ${media.desktop} {
    ${typography.H1};
    color: ${colors.lightGray};
  }
`

const ScrollHint = styled.div`
  position: absolute;
  bottom: 0;
  left: 96px;

  ${media.desktop} {
    left: calc(2 / 12 * 100vw);
  }
`

const ScrollHintText = styled.div`
  ${typography.SmallCaps};
  color: ${colors.offWhite};
  margin-bottom: 16px;
  transform: translateX(-50%);
`

const ScrollHintLine = styled.div`
  height: 64px;
  width: 2px;
  background-color: ${colors.offWhite};
`

const SocialLinks = styled.div`
  position: absolute;
  bottom: 48px;
  right: 24px;

  ${media.desktop} {
    right: 48px;
  }
`

const InstagramLink = styled(InstagramIcon)`
  color: ${colors.offWhite};
`

const FacebookLink = styled(FacebookIcon)`
  color: ${colors.offWhite};
`

const SocialLinksDivider = styled.div`
  background-color: ${colors.offWhite};
  height: 2px;
  width: 24px;
  margin: 32px 0;

  ${media.desktop} {
    width: 32px;
    margin: 36px 0;
  }
`

export interface IOnboardingProps {
  title: string
  subtitle: string
  image: FluidObject
}

const Onboarding = (props: IOnboardingProps) => (
  <Container>
    <Image fluid={props.image} />
    <ImageOverlay />
    <Content>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Content>
    <ScrollHint>
      <ScrollHintText>Play Ball</ScrollHintText>
      <ScrollHintLine />
    </ScrollHint>
    <SocialLinks>
      <a
        href="https://www.instagram.com/whittierpony/"
        target="__blank"
        aria-label="Open Whittier PONY Instragram page"
      >
        <InstagramLink />
      </a>
      <SocialLinksDivider />
      <a
        href="https://www.facebook.com/WhittierPony/"
        target="__blank"
        aria-label="Open Whittier PONY Facebook page"
      >
        <FacebookLink />
      </a>
    </SocialLinks>
  </Container>
)

export default Onboarding
