import React from "react";

import {
  Container,
  LogoArea,
  LogoImage,
  MainTitleArea,
  MainTitle,
  LoginButtonArea,
  LoginButton,
} from "./SuccessRegisterStyle";

const SuccessRegisterContent = () => {
  return (
    <Container>
      <LogoArea>
        <LogoImage />
      </LogoArea>

      <MainTitleArea>
        <MainTitle>회원가입 완료!</MainTitle>
      </MainTitleArea>

      <LoginButtonArea>
        <LoginButton to={"/login"}>로그인</LoginButton>
      </LoginButtonArea>
    </Container>
  );
};

export default SuccessRegisterContent;
