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
const Square = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-10xs);
  background-color: var(--neutral-900);
  width: 16px;
  height: 16px;
  opacity: 0.2;
`;
const MediaIconunfilledplacehol = styled.div`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Label = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Square1 = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-10xs);
  background-color: var(--primary-500-main);
  width: 16px;
  height: 16px;
  opacity: 0.2;
`;
const IconLeft = styled.div`
  width: 12px;
  position: relative;
  border-radius: var(--br-11xs);
  height: 12px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Badge = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const Badge1 = styled.div`
  border-radius: var(--br-5xl);
  background-color: var(--primary-50);
  height: 20px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  text-align: center;
  font-size: var(--paragraph-xsmall-medium-size);
  color: var(--primary-500-main);
`;
const LeftContent = styled.div`
  width: 358px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const MediaIconunfilledplacehol1 = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Container1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Accordion = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--neutral-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
`;
const Subtext = styled.div`
  flex: 1;
  position: relative;
  line-height: 20px;
`;
const Expansion = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--label-medium-medium-size);
  color: var(--neutral-500);
`;
const Container2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Square2 = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-9xs);
  background-color: var(--neutral-900);
  width: 16px;
  height: 16px;
  opacity: 0.2;
`;
const Label1 = styled.div`
  position: relative;
  line-height: 16px;
  font-weight: 500;
`;
const Button = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--generic-white);
  box-shadow: var(--drop-shadow-xsmall);
  border: 1px solid var(--neutral-200);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-base);
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--label-medium-medium-size);
  color: var(--neutral-700);
`;
const Accordion1 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--neutral-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-xl);
`;
const Label2 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Badge2 = styled.div`
  border-radius: var(--br-5xl);
  background-color: var(--primary-50);
  height: 20px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  text-align: center;
  font-size: var(--paragraph-xsmall-medium-size);
  color: var(--primary-300);
`;
const LeftContent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Accordion2 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--neutral-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  color: var(--neutral-400);
`;
const AccordianGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  font-size: var(--paragraph-medium-regular-size);
`;
const Container3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const FaqRoot = styled.section`
  align-self: stretch;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-301xl);
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

const FAQ: NextPage = () => {
  return (
    <FaqRoot>
      <Container3>
        <Heading1>Frequently Asked Questions</Heading1>
        <Content>
          <AccordianGroup>
            <Accordion>
              <Container1>
                <LeftContent>
                  <MediaIconunfilledplacehol>
                    <Square />
                  </MediaIconunfilledplacehol>
                  <Label>Insert an informative title text here</Label>
                  <Badge1>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                    <Badge>Badge</Badge>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                  </Badge1>
                </LeftContent>
                <MediaIconunfilledplacehol1
                  alt=""
                  src="/media--iconunfilledcheverondown.svg"
                />
              </Container1>
            </Accordion>
            <Accordion>
              <Container1>
                <LeftContent>
                  <MediaIconunfilledplacehol>
                    <Square />
                  </MediaIconunfilledplacehol>
                  <Label>Insert an informative title text here</Label>
                  <Badge1>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                    <Badge>Badge</Badge>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                  </Badge1>
                </LeftContent>
                <MediaIconunfilledplacehol1
                  alt=""
                  src="/media--iconunfilledcheverondown.svg"
                />
              </Container1>
            </Accordion>
            <Accordion>
              <Container1>
                <LeftContent>
                  <MediaIconunfilledplacehol>
                    <Square />
                  </MediaIconunfilledplacehol>
                  <Label>Insert an informative title text here</Label>
                  <Badge1>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                    <Badge>Badge</Badge>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                  </Badge1>
                </LeftContent>
                <MediaIconunfilledplacehol1
                  alt=""
                  src="/media--iconunfilledcheverondown.svg"
                />
              </Container1>
            </Accordion>
            <Accordion1>
              <Container2>
                <Container1>
                  <LeftContent>
                    <MediaIconunfilledplacehol>
                      <Square />
                    </MediaIconunfilledplacehol>
                    <Label>Insert an informative title text here</Label>
                    <Badge1>
                      <IconLeft>
                        <Square1 />
                      </IconLeft>
                      <Badge>Badge</Badge>
                      <IconLeft>
                        <Square1 />
                      </IconLeft>
                    </Badge1>
                  </LeftContent>
                  <MediaIconunfilledplacehol1
                    alt=""
                    src="/media--iconunfilledcheverondown.svg"
                  />
                </Container1>
                <Expansion>
                  <Subtext>
                    This is subtext which appears after expanding the accordian.
                  </Subtext>
                </Expansion>
              </Container2>
              <Button>
                <MediaIconunfilledplacehol>
                  <Square2 />
                </MediaIconunfilledplacehol>
                <Label1>Button CTA</Label1>
                <MediaIconunfilledplacehol>
                  <Square2 />
                </MediaIconunfilledplacehol>
              </Button>
            </Accordion1>
            <Accordion2>
              <Container1>
                <LeftContent1>
                  <MediaIconunfilledplacehol>
                    <Square />
                  </MediaIconunfilledplacehol>
                  <Label2>Insert an informative title text here</Label2>
                  <Badge2>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                    <Badge>Badge</Badge>
                    <IconLeft>
                      <Square1 />
                    </IconLeft>
                  </Badge2>
                </LeftContent1>
                <MediaIconunfilledplacehol1
                  alt=""
                  src="/media--iconunfilledcheverondown.svg"
                />
              </Container1>
            </Accordion2>
          </AccordianGroup>
        </Content>
      </Container3>
    </FaqRoot>
  );
};

export default FAQ;
