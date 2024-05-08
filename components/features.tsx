import type { NextPage } from "next";
import styled from "styled-components";

const SectionHeading = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--heading-h2-extrabold-desktop-size);
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 800;
  font-family: inherit;
  color: var(--neutral-900);
`;
const MediaIcon24pxunfilledche = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
`;
const ListItem = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Checklist = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Divider = styled.div`
  align-self: stretch;
  background-color: var(--neutral-200);
  height: 1px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
`;
const Text1 = styled.div`
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
const IconRight = styled.div`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button1 = styled.button`
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
const IphoneIcon = styled.img`
  width: 392px;
  position: relative;
  height: 506px;
  object-fit: cover;
`;
const IphoneContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    flex: unset;
    align-self: stretch;
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
const FeaturesRoot = styled.section`
  align-self: stretch;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-93xl);
  text-align: left;
  font-size: var(--paragraph-medium-regular-size);
  color: var(--neutral-700);
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

const Features: NextPage = () => {
  return (
    <FeaturesRoot>
      <Container1>
        <Content>
          <Text1>
            <SectionHeading>
              A catchy heading that brings some interest to visitors
            </SectionHeading>
            <Checklist>
              <ListItem>
                <MediaIcon24pxunfilledche
                  alt=""
                  src="/media--icon24pxunfilledcheck.svg"
                />
                <Text>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </Text>
              </ListItem>
              <ListItem>
                <MediaIcon24pxunfilledche
                  alt=""
                  src="/media--icon24pxunfilledcheck.svg"
                />
                <Text>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </Text>
              </ListItem>
              <ListItem>
                <MediaIcon24pxunfilledche
                  alt=""
                  src="/media--icon24pxunfilledcheck.svg"
                />
                <Text>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </Text>
              </ListItem>
            </Checklist>
            <Divider />
            <SupportingText>
              Tortor interdum condimentum nunc molestie quam lectus euismod
              pulvinar risus. Cursus in odio aenean.
            </SupportingText>
          </Text1>
          <Button1>
            <IconLeft>
              <Square />
            </IconLeft>
            <Label>Primary Action</Label>
            <IconRight>
              <Square />
            </IconRight>
          </Button1>
        </Content>
        <IphoneContainer>
          <IphoneIcon alt="" src="/iphone@2x.png" />
        </IphoneContainer>
      </Container1>
    </FeaturesRoot>
  );
};

export default Features;
