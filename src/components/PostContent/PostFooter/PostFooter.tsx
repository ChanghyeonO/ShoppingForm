import React from "react";

import {
  Container,
  LogoArea,
  LogoImage,
  Logo,
  IntroArea,
  WhoMadeArea,
  WhoMade,
  TelNumber,
  ContactArea,
  EmailLogo,
  InstaLogo,
  GithubLogo,
} from "./PostFooterStyle";

const PostFooter = () => {
  return (
    <Container>
      <LogoArea>
        <LogoImage />
        <Logo>ShoppingForm</Logo>
      </LogoArea>
      <IntroArea>
        <WhoMadeArea>
          <WhoMade>대표 : 오창현</WhoMade>
          <TelNumber>연락처 : 010-4402-6623</TelNumber>
        </WhoMadeArea>
        <ContactArea>
          <a
            href="mailto:ckdgus5189@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailLogo />
          </a>
          <a
            href="https://www.instagram.com/5_changhyeon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstaLogo />
          </a>
          <a
            href="https://github.com/ChanghyeonO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo />
          </a>
        </ContactArea>
      </IntroArea>
    </Container>
  );
};

export default PostFooter;
