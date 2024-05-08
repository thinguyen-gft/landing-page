import type { NextPage } from "next";
import styled from "styled-components";

const LogomarkIcon = styled.img`
  width: 32px;
  position: relative;
  height: 32px;
`;
const LogotypeIcon = styled.img`
  width: 99px;
  position: relative;
  height: 32px;
  display: none;
`;
const MediaCompanyPlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xs);
`;
const Description = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Links = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xl);
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const LeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const MediaSocialIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-21xl);
`;
const Container1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) 0px;
`;
const FooterRoot = styled.section`
  align-self: stretch;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-93xl);
  text-align: center;
  font-size: var(--paragraph-medium-regular-size);
  color: var(--neutral-900);
  font-family: var(--label-medium-medium);
`;

const Footer: NextPage = () => {
  return (
    <FooterRoot>
      <Container1>
        <Content>
          <LeadingContent>
            <MediaCompanyPlaceholder>
              <LogomarkIcon alt="" src="/logomark.svg" />
              <LogotypeIcon alt="" src="/logotype.svg" />
            </MediaCompanyPlaceholder>
            <Links>
              <Description>Overview</Description>
              <Description>Teams</Description>
              <Description>Jobs</Description>
              <Description>Help</Description>
              <Description>Privacy</Description>
            </Links>
          </LeadingContent>
          <Icons>
            <MediaSocialIcon alt="" src="/media--social-icon.svg" />
            <MediaSocialIcon alt="" src="/media--social-icon.svg" />
            <MediaSocialIcon
              alt=""
              src="/companyinstagram-stylegray-backgroundnone.svg"
            />
            <MediaSocialIcon
              alt=""
              src="/companylinkedin-stylegray-backgroundnone.svg"
            />
          </Icons>
        </Content>
      </Container1>
    </FooterRoot>
  );
};

export default Footer;
