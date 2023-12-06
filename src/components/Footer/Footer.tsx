import React from "react";

import {
  Container,
  LogoArea,
  LogoImage,
  Logo,
  IntroArea,
  WhoMadeArea,
  WhoMade,
  ContactArea,
  EmailLogo,
  InstaLogo,
  GithubLogo,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <LogoArea>
        <LogoImage />
        <Logo>ShoppingForm</Logo>
      </LogoArea>
      <IntroArea>
        <WhoMadeArea>
          <WhoMade>만든이 : 오창현</WhoMade>
        </WhoMadeArea>
        <ContactArea>
          <EmailLogo />
          <InstaLogo />
          <GithubLogo />
        </ContactArea>
      </IntroArea>
    </Container>
  );
};

export default Footer;
