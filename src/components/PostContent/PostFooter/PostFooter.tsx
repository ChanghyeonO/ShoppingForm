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
        <Logo>쇼핑몰 이름을 추가하세요</Logo>
      </LogoArea>
      <IntroArea>
        <WhoMadeArea>
          <WhoMade>대표 : 추가하기</WhoMade>
          <TelNumber>연락처 : 추가하기</TelNumber>
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
