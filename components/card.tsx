import type { NextPage } from "next";
import styled from "styled-components";

export type CardType = {
  icon?: string;
  heading?: string;
  description?: string;
};

const Icon1 = styled.img`
  width: 48px;
  position: relative;
  border-radius: var(--br-181xl);
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Heading = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 28px;
  font-weight: 600;
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--paragraph-medium-regular-size);
  line-height: 24px;
  color: var(--neutral-500);
`;
const Text = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const FeatureRoot = styled.div`
  width: 370px;
  border-radius: var(--br-7xs);
  background-color: var(--generic-white);
  box-shadow: var(--drop-shadow-small);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--heading-h6-semibold-desktop-size);
  color: var(--neutral-900);
  font-family: var(--label-medium-medium);
  @media screen and (max-width: 1400px) {
    min-width: calc(100% / 3 - 60px);
    max-width: calc(100% / 3 - 60px);
  }
  @media screen and (max-width: 992px) {
    min-width: calc(100% / 2 - 30px);
    max-width: calc(100% / 2 - 30px);
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    min-width: 100%;
  }
`;

const Card: NextPage<CardType> = ({ icon, heading, description }) => {
  return (
    <FeatureRoot>
      <Icon1 alt="" src={icon} />
      <Text>
        <Heading>{heading}</Heading>
        <SupportingText>{description}</SupportingText>
      </Text>
    </FeatureRoot>
  );
};

export default Card;
