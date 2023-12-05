import React from "react";

import {
  Container,
  LogoArea,
  LogoImage,
  LoginArea,
  LoginText,
  RegisterArea,
  RegisterText,
} from "./HeaderStyle";

const Header = () => {
  return (
    <Container>
      <LogoArea>
        <LogoImage />
      </LogoArea>
      <LoginArea>
        <LoginText>로그인</LoginText>
      </LoginArea>
      <RegisterArea>
        <RegisterText>회원가입</RegisterText>
      </RegisterArea>
    </Container>
  );
};

export default Header;
