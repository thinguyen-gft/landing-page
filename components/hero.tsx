import type { NextPage } from "next";
import { useState, useCallback } from "react";
import ModalDesktop from "./modal-desktop";
import PortalPopup from "./portal-popup";
import styled from "styled-components";

const Overline = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 1px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
`;
const Heading1 = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--display-extrabold-large-size);
  letter-spacing: -0.02em;
  line-height: 56px;
  font-weight: 800;
  font-family: inherit;
  color: var(--neutral-900);
`;
const HeadingOverline = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--paragraph-large-regular-size);
  line-height: 28px;
  color: var(--neutral-700);
`;
const Text = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Square = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-9xs);
  background-color: var(--generic-white);
  width: 16px;
  height: 16px;
  opacity: 0.2;
`;
const IconLeft = styled.div`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Label = styled.div`
  position: relative;
  font-size: var(--paragraph-medium-regular-size);
  line-height: 18px;
  font-weight: 500;
  font-family: var(--label-medium-medium);
  color: var(--generic-white);
  text-align: center;
`;
const PrimaryAction = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-500-main);
  padding: var(--padding-sm) var(--padding-xl);
  background-color: var(--primary-500-main);
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-small);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const MediaIconfilledstar = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Stars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NumOfReviews = styled.div`
  position: relative;
  line-height: 20px;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  @media screen and (max-width: 576px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const CtaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: center;
  color: var(--neutral-500);
  @media screen and (max-width: 576px) {
    align-self: stretch;
    width: auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-29xl) 0px;
  gap: var(--gap-21xl);
  @media screen and (max-width: 992px) {
    flex: unset;
    align-self: stretch;
  }
`;
const ImageIcon = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 592px;
  object-fit: cover;
  @media screen and (max-width: 992px) {
    min-width: calc(100% + 64px);
    margin-left: -32px;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 576px) {
    min-width: calc(100% + 32px);
    margin-left: -16px;
  }
`;
const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-13xl);
  @media screen and (max-width: 1400px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const HeroRoot = styled.section`
  align-self: stretch;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-93xl);
  text-align: left;
  font-size: var(--label-medium-medium-size);
  color: var(--primary-500-main);
  font-family: var(--label-medium-medium);
  @media screen and (max-width: 992px) {
    flex-direction: row;
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 576px) {
    align-items: center;
    justify-content: center;
    padding-left: var(--padding-base);
    padding-right: var(--padding-base);
    box-sizing: border-box;
  }
`;

const Hero: NextPage = () => {
  const [isModalDesktopOpen, setModalDesktopOpen] = useState(false);

  const openModalDesktop = useCallback(() => {
    setModalDesktopOpen(true);
  }, []);

  const closeModalDesktop = useCallback(() => {
    setModalDesktopOpen(false);
  }, []);

  return (
    <>
      <HeroRoot>
        <Container1>
          <Content>
            <Text>
              <HeadingOverline>
                <Overline>become a legendary designer</Overline>
                <Heading1>A headline to make an impact on visitors</Heading1>
              </HeadingOverline>
              <SupportingText>
                A subheading that addresses the what, the why we should care and
                hopefully some social proof.
              </SupportingText>
            </Text>
            <CtaContainer>
              <PrimaryAction onClick={openModalDesktop}>
                <IconLeft>
                  <Square />
                </IconLeft>
                <Label>Primary Action</Label>
                <IconLeft>
                  <Square />
                </IconLeft>
              </PrimaryAction>
              <Rating>
                <Stars>
                  <MediaIconfilledstar
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                  <MediaIconfilledstar
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                  <MediaIconfilledstar
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                  <MediaIconfilledstar
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                  <MediaIconfilledstar
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                </Stars>
                <NumOfReviews>from 100+ reviews</NumOfReviews>
              </Rating>
            </CtaContainer>
          </Content>
          <ImageIcon alt="" src="/image@2x.png" />
        </Container1>
      </HeroRoot>
      {isModalDesktopOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalDesktop}
        >
          <ModalDesktop onClose={closeModalDesktop} />
        </PortalPopup>
      )}
    </>
  );
};

export default Hero;
