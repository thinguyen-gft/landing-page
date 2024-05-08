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
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Square = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-9xs);
  background-color: var(--primary-500-main);
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
  line-height: 16px;
  font-weight: 500;
`;
const Link = styled.div`
  border-radius: var(--br-5xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-base);
  gap: var(--gap-5xs);
`;
const Links1 = styled.nav`
  margin: 0;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--label-medium-medium-size);
  color: var(--neutral-800);
  font-family: var(--label-medium-medium);
`;
const Divider = styled.div`
  width: 1px;
  position: relative;
  background-color: var(--neutral-200);
  height: 44px;
`;
const Square1 = styled.div`
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
  font-size: var(--label-medium-medium-size);
  line-height: 16px;
  font-weight: 500;
  font-family: var(--label-medium-medium);
  color: var(--neutral-800);
  text-align: center;
`;
const Button2 = styled.button`
  cursor: pointer;
  border: 1px solid var(--neutral-200);
  padding: var(--padding-3xs) var(--padding-base);
  background-color: var(--generic-white);
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-xsmall);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Square2 = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: var(--br-9xs);
  background-color: var(--generic-white);
  width: 16px;
  height: 16px;
  opacity: 0.2;
`;
const Label2 = styled.div`
  position: relative;
  font-size: var(--label-medium-medium-size);
  line-height: 16px;
  font-weight: 500;
  font-family: var(--label-medium-medium);
  color: var(--generic-white);
  text-align: justify;
`;
const Button3 = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-500-main);
  padding: var(--padding-3xs) var(--padding-base);
  background-color: var(--primary-500-main);
  border-radius: var(--br-5xs);
  box-shadow: var(--drop-shadow-xsmall);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-7xs);
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-base);
`;
const NavigationAndActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-13xl);
  @media screen and (max-width: 1400px) {
    display: flex;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
const MediaIconunfilledmenu = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const HamburgerButton = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--generic-white);
  box-shadow: var(--drop-shadow-xsmall);
  border: 1px solid var(--neutral-200);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  @media screen and (max-width: 1400px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
const Container1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) 0px;
`;
const HeaderRoot = styled.header`
  align-self: stretch;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-93xl);
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

const Header: NextPage = () => {
  return (
    <HeaderRoot>
      <Container1>
        <Content>
          <Logo>
            <MediaCompanyPlaceholder>
              <LogomarkIcon alt="" src="/logomark.svg" />
              <LogotypeIcon alt="" src="/logotype.svg" />
            </MediaCompanyPlaceholder>
          </Logo>
          <NavigationAndActions>
            <Links1>
              <Link>
                <IconLeft>
                  <Square />
                </IconLeft>
                <Label>Products</Label>
                <IconLeft>
                  <Square />
                </IconLeft>
              </Link>
              <Link>
                <IconLeft>
                  <Square />
                </IconLeft>
                <Label>Enterprise</Label>
                <IconLeft>
                  <Square />
                </IconLeft>
              </Link>
              <Link>
                <IconLeft>
                  <Square />
                </IconLeft>
                <Label>Pricing</Label>
                <IconLeft>
                  <Square />
                </IconLeft>
              </Link>
              <Link>
                <IconLeft>
                  <Square />
                </IconLeft>
                <Label>Resouces</Label>
                <IconLeft>
                  <Square />
                </IconLeft>
              </Link>
              <Link>
                <IconLeft>
                  <Square />
                </IconLeft>
                <Label>About</Label>
                <IconLeft>
                  <Square />
                </IconLeft>
              </Link>
            </Links1>
            <Divider />
            <Actions>
              <Button2>
                <IconLeft>
                  <Square1 />
                </IconLeft>
                <Label1>Action</Label1>
                <IconLeft>
                  <Square1 />
                </IconLeft>
              </Button2>
              <Button3>
                <IconLeft>
                  <Square2 />
                </IconLeft>
                <Label2>Action</Label2>
                <IconLeft>
                  <Square2 />
                </IconLeft>
              </Button3>
            </Actions>
          </NavigationAndActions>
          <HamburgerButton>
            <MediaIconunfilledmenu alt="" src="/media--iconunfilledmenu.svg" />
          </HamburgerButton>
        </Content>
      </Container1>
    </HeaderRoot>
  );
};

export default Header;
