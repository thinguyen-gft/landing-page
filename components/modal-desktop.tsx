import type { NextPage } from "next";
import styled from "styled-components";

export type ModalDesktopType = {
  onClose?: () => void;
};

const WedLoveTo = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 800;
  font-family: inherit;
`;
const ContactUsRegarding = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--paragraph-medium-regular-size);
  line-height: 24px;
  color: var(--neutral-700);
`;
const Header = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Label = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 16px;
  font-weight: 500;
`;
const InputField = styled.input`
  border: 1px solid var(--neutral-200);
  outline: none;
  font-family: var(--label-medium-medium);
  font-size: var(--label-medium-medium-size);
  background-color: var(--generic-white);
  align-self: stretch;
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-xsmall);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  color: var(--neutral-400);
`;
const InputFieldBoxed = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  @media screen and (max-width: 576px) {
    flex: unset;
    align-self: stretch;
  }
`;
const Row = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
const InputField1 = styled.input`
  border: 1px solid var(--neutral-200);
  outline: none;
  font-family: var(--label-medium-medium);
  font-size: var(--label-medium-medium-size);
  background-color: var(--generic-white);
  align-self: stretch;
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-xsmall);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  color: var(--neutral-400);
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const InputFieldBoxed1 = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Row1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ChooseTheServices = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const Checkbox8 = styled.input`
  margin: 0;
  width: 18px;
  position: relative;
  height: 18px;
`;
const ControlFrame = styled.div`
  width: 24px;
  height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ControlButtonHeading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const DescriptionOfWhat = styled.div`
  width: 304px;
  position: relative;
  line-height: 24px;
  color: var(--neutral-500);
  display: none;
`;
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FormControl = styled.div`
  width: 245.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-xs);
`;
const OuterRectangle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-9xs);
  background-color: var(--generic-white);
  border: 1.5px solid var(--color-lightgray);
  box-sizing: border-box;
`;
const Border = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const Checkbox9 = styled.div`
  width: 18px;
  position: relative;
  height: 18px;
`;
const List = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px 16px;
  font-size: var(--paragraph-medium-regular-size);
`;
const ServicesRadios = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const InputFrame = styled.textarea`
  border: 1px solid var(--neutral-200);
  background-color: var(--generic-white);
  font-family: var(--label-medium-medium);
  font-size: var(--label-medium-medium-size);
  outline: none;
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-xsmall);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  color: var(--neutral-400);
`;
const AddMessageInput = styled.div`
  align-self: stretch;
  height: 179px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Label1 = styled.div`
  position: relative;
  font-size: var(--label-medium-medium-size);
  line-height: 16px;
  font-weight: 500;
  font-family: var(--label-medium-medium);
  color: var(--generic-white);
  text-align: justify;
`;
const Button1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-500-main);
  padding: var(--padding-3xs) var(--padding-base);
  background-color: var(--primary-500-main);
  align-self: stretch;
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-xsmall);
  box-sizing: border-box;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Close1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  align-self: stretch;
  position: relative;
  font-size: var(--label-medium-medium-size);
  line-height: 16px;
  font-weight: 500;
  font-family: var(--label-medium-medium);
  color: #000;
  text-align: center;
  display: inline-block;
`;
const CtaContainer = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Form = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  text-align: left;
  font-size: var(--label-medium-medium-size);
`;
const Container1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  @media screen and (max-width: 1400px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 992px) {
    align-items: center;
    justify-content: center;
  }
`;
const ModalDesktopRoot = styled.div`
  width: 1000px;
  border-radius: var(--br-5xs);
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-45xl) 180px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
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

const ModalDesktop: NextPage<ModalDesktopType> = ({ onClose }) => {
  return (
    <ModalDesktopRoot>
      <Container1>
        <Header>
          <WedLoveTo>We’d love to hear from you</WedLoveTo>
          <ContactUsRegarding>
            Contact us regarding any concerns or inquiries.
          </ContactUsRegarding>
        </Header>
        <Form>
          <Row>
            <InputFieldBoxed>
              <Label>First Name</Label>
              <InputField placeholder="e.g. John" type="text" />
            </InputFieldBoxed>
            <InputFieldBoxed>
              <Label>Last Name</Label>
              <InputField placeholder="e.g. Dowry" type="text" />
            </InputFieldBoxed>
          </Row>
          <Row1>
            <InputFieldBoxed1>
              <Label>Company</Label>
              <InputField1 placeholder="e.g. Company XYZ" type="text" />
            </InputFieldBoxed1>
          </Row1>
          <Row1>
            <InputFieldBoxed1>
              <Label>Phone Number</Label>
              <InputField placeholder="+1 123 456 7890" type="text" />
            </InputFieldBoxed1>
          </Row1>
          <ServicesRadios>
            <ChooseTheServices>
              Choose the services that best fits your need.
            </ChooseTheServices>
            <List>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>UI/UX Design</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox9>
                    <Border>
                      <OuterRectangle />
                    </Border>
                  </Checkbox9>
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>Web Development</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>Brand Strategy</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>{`Marketing & Content`}</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>
                    User Research Workshop
                  </ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>App Development</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>iOS App Design</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>
                    Android App Design
                  </ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
              <FormControl>
                <ControlFrame>
                  <Checkbox8 type="checkbox" />
                </ControlFrame>
                <Text>
                  <ControlButtonHeading>Other</ControlButtonHeading>
                  <DescriptionOfWhat>
                    Description of what this control will do
                  </DescriptionOfWhat>
                </Text>
              </FormControl>
            </List>
          </ServicesRadios>
          <AddMessageInput>
            <ChooseTheServices>Additional Message</ChooseTheServices>
            <InputFrame
              placeholder="Type a message here..."
              defaultValue="0/300"
            />
          </AddMessageInput>
          <CtaContainer>
            <Button1>
              <Label1>Submit</Label1>
            </Button1>
            <Close1 onClick={onClose}>Close</Close1>
          </CtaContainer>
        </Form>
      </Container1>
    </ModalDesktopRoot>
  );
};

export default ModalDesktop;
