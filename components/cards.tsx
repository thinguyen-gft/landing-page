import type { NextPage } from "next";
import styled from "styled-components";
import Card from "./card";

const Overline = styled.div`
  width: 624px;
  position: relative;
  letter-spacing: 1px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 992px) {
    align-self: stretch;
    width: auto;
  }
`;
const SectionHeading = styled.h1`
  margin: 0;
  width: 624px;
  position: relative;
  font-size: var(--heading-h2-extrabold-desktop-size);
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 800;
  font-family: inherit;
  color: var(--neutral-900);
  display: inline-block;
  @media screen and (max-width: 992px) {
    align-self: stretch;
    width: auto;
  }
`;
const HeadingOverline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  @media screen and (max-width: 992px) {
    align-self: stretch;
    width: auto;
  }
  @media screen and (max-width: 576px) {
    align-self: stretch;
    width: auto;
  }
`;
const Row = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--gap-11xl);
  @media screen and (max-width: 1400px) {
    height: auto;
  }
  @media screen and (max-width: 992px) {
    align-self: stretch;
    width: auto;
  }
`;
const CardsContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--heading-h6-semibold-desktop-size);
  color: var(--neutral-900);
`;
const Container1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-29xl);
`;
const CardsRoot = styled.section`
  align-self: stretch;
  background-color: var(--neutral-50);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-93xl);
  text-align: center;
  font-size: var(--label-medium-medium-size);
  color: var(--primary-500-main);
  font-family: var(--label-medium-medium);
  @media screen and (max-width: 992px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 576px) {
    padding-left: var(--padding-base);
    padding-right: var(--padding-base);
    box-sizing: border-box;
  }
`;

const Cards: NextPage = () => {
  return (
    <CardsRoot>
      <Container1>
        <HeadingOverline>
          <Overline>why designership</Overline>
          <SectionHeading>
            A catchy heading that brings some interest to visitors
          </SectionHeading>
        </HeadingOverline>
        <CardsContainer>
          <Row>
            <Card
              icon="/icon.svg"
              heading="The most inspiring feature"
              description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
            />
            <Card
              icon="/icon.svg"
              heading="The most inspiring feature"
              description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
            />
            <Card
              icon="/icon.svg"
              heading="The most inspiring feature"
              description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
            />
            <Card
              icon="/icon.svg"
              heading="The most inspiring feature"
              description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
            />
            <Card
              icon="/icon.svg"
              heading="The most inspiring feature"
              description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
            />
            <Card
              icon="/icon.svg"
              heading="The most inspiring feature"
              description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
            />
          </Row>
        </CardsContainer>
      </Container1>
    </CardsRoot>
  );
};

export default Cards;
