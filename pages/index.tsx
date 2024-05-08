import type { NextPage } from "next";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import TrustedBy from "../components/trusted-by";
import Cards from "../components/cards";
import FAQ from "../components/f-a-q";
import Footer from "../components/footer";
import styled from "styled-components";

const LandingDesktopRoot = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LandingDesktop: NextPage = () => {
  return (
    <LandingDesktopRoot>
      <Header />
      <Hero />
      <Features />
      <TrustedBy />
      <Cards />
      <FAQ />
      <Footer />
    </LandingDesktopRoot>
  );
};

export default LandingDesktop;
