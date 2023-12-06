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
          <a href="mailto:ckdgus5189@gmail.com" target="_blank">
            <EmailLogo />
          </a>
          <a href="https://www.instagram.com/5_changhyeon/" target="_blank">
            <InstaLogo />
          </a>
          <a href="https://github.com/ChanghyeonO" target="_blank">
            <GithubLogo />
          </a>
        </ContactArea>
      </IntroArea>
    </Container>
  );
};

export default Footer;
