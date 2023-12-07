import React from "react";

import {
  Container,
  LogoArea,
  LogoImage,
  MainTitleArea,
  MainTitle,
  EmailInputArea,
  EmailInput,
  PasswordInputArea,
  PasswordInput,
  LoginButtonArea,
  LoginButton,
  KakaoLoginButton,
  RegisterButtonArea,
  RegisterButton,
  FindAccountArea,
  FindEmailArea,
  FindEmailButton,
  FindPasswordArea,
  FindPasswordButton,
} from "./LoginContentStyle";

const LoginContent = () => {
  return (
    <Container>
      <LogoArea>
        <LogoImage />
      </LogoArea>

      <MainTitleArea>
        <MainTitle>환영해요!</MainTitle>
      </MainTitleArea>
      <EmailInputArea>
        <EmailInput type="email" placeholder={"이메일을 입력하세요"} />
      </EmailInputArea>
      <PasswordInputArea>
        <PasswordInput type="password" placeholder={"비밀번호를 입력하세요"} />
      </PasswordInputArea>

      <LoginButtonArea>
        <LoginButton>로그인</LoginButton>
        <KakaoLoginButton>카카오 로그인</KakaoLoginButton>
      </LoginButtonArea>

      <RegisterButtonArea>
        <RegisterButton to={"/service-terms"}>회원가입</RegisterButton>
      </RegisterButtonArea>

      <FindAccountArea>
        <FindEmailArea>
          <FindEmailButton>아이디 찾기</FindEmailButton>
        </FindEmailArea>
        <FindPasswordArea>
          <FindPasswordButton>비밀번호 찾기</FindPasswordButton>
        </FindPasswordArea>
      </FindAccountArea>
    </Container>
  );
};

export default LoginContent;
