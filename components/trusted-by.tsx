import type { NextPage } from "next";
import styled from "styled-components";

const Heading1 = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 800;
  font-family: inherit;
`;
const Paragraph = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--paragraph-large-regular-size);
  line-height: 28px;
  color: var(--neutral-500);
`;
const HeadingParagraph = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
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
const Button2 = styled.button`
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
`;
const Square1 = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-9xs);
  background-color: var(--primary-500-main);
  width: 16px;
  height: 16px;
  opacity: 0.2;
`;
const Label1 = styled.div`
  position: relative;
  font-size: var(--paragraph-medium-regular-size);
  line-height: 18px;
  font-weight: 500;
  font-family: var(--label-medium-medium);
  color: var(--primary-500-main);
  text-align: center;
`;
const Button3 = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-100);
  padding: var(--padding-sm) var(--padding-xl);
  background-color: var(--primary-50);
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-small);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Actions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  @media screen and (max-width: 992px) {
    flex: unset;
    align-self: stretch;
  }
`;
const MediaCompanyPlaceholder = styled.img`
  width: 40px;
  position: relative;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const LogoBlock = styled.div`
  align-self: stretch;
  background-color: var(--neutral-50);
  height: 120px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MediaCompanyPlaceholder1 = styled.img`
  width: 40px;
  position: relative;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  @media screen and (max-width: 992px) {
    width: 48%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    min-width: 100%;
  }
`;
const CompaniesLogos = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-9xs);
  @media screen and (max-width: 992px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const Container1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const TrustedByRoot = styled.section`
  align-self: stretch;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-93xl);
  text-align: left;
  font-size: var(--heading-h2-extrabold-desktop-size);
  color: var(--neutral-900);
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

const TrustedBy: NextPage = () => {
  return (
    <TrustedByRoot>
      <Container1>
        <Content>
          <HeadingParagraph>
            <Heading1>Trusted by over 100+ companies</Heading1>
            <Paragraph>
              Gravida sed mattis proin turpis libero porta condimentum aliquam
              interdum. Tellus vitae ullamcorper pharetra consectetur id
              dignissim tortor ullamcorper nec. In tellus mauris proin tristique
              iaculis ultrices lacus. A velit dignissim sed bibendum cras
              pellentesque tellus integer est. Pellentesque leo, amet aliquet
              nibh ullamcorper fermentum. Viverra mi et id mi non. Varius
              pellentesque mus sed viverra sed id est dui, posuere.
            </Paragraph>
          </HeadingParagraph>
          <Actions>
            <Button2>
              <IconLeft>
                <Square />
              </IconLeft>
              <Label>Primary Action</Label>
              <IconLeft>
                <Square />
              </IconLeft>
            </Button2>
            <Button3>
              <IconLeft>
                <Square1 />
              </IconLeft>
              <Label1>Secondary Action</Label1>
              <IconLeft>
                <Square1 />
              </IconLeft>
            </Button3>
          </Actions>
        </Content>
        <CompaniesLogos>
          <Column>
            <LogoBlock>
              <MediaCompanyPlaceholder
                alt=""
                src="/media--company-placeholder@2x.png"
              />
            </LogoBlock>
            <LogoBlock>
              <MediaCompanyPlaceholder
                alt=""
                src="/media--company-placeholder@2x.png"
              />
            </LogoBlock>
            <LogoBlock>
              <MediaCompanyPlaceholder1
                alt=""
                src="/media--company-placeholder.svg"
              />
            </LogoBlock>
          </Column>
          <Column>
            <LogoBlock>
              <MediaCompanyPlaceholder
                alt=""
                src="/media--company-placeholder@2x.png"
              />
            </LogoBlock>
            <LogoBlock>
              <MediaCompanyPlaceholder1
                alt=""
                src="/media--company-placeholder.svg"
              />
            </LogoBlock>
            <LogoBlock>
              <MediaCompanyPlaceholder1
                alt=""
                src="/media--company-placeholder.svg"
              />
            </LogoBlock>
          </Column>
        </CompaniesLogos>
      </Container1>
    </TrustedByRoot>
  );
};

export default TrustedBy;
