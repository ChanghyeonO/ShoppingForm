import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  LogoArea,
  LogoImage,
  MainTitleArea,
  MainTitle,
  NickNameInputArea,
  NickNameInput,
  EmailInputArea,
  EmailInput,
  PasswordInputArea,
  PasswordInput,
  PasswordCheckInput,
  RegisterButtonArea,
  RegisterButton,
  UserAuthArea,
  UserAuthButton,
} from "./RegisterContentStyle";

const RegisterContent = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/register-success");
  };

  return (
    <Container>
      <LogoArea>
        <LogoImage />
      </LogoArea>

      <MainTitleArea>
        <MainTitle>회원가입</MainTitle>
      </MainTitleArea>
      <NickNameInputArea>
        <NickNameInput type="text" placeholder={"닉네임을 입력하세요"} />
      </NickNameInputArea>
      <EmailInputArea>
        <EmailInput type="email" placeholder={"이메일을 입력하세요"} />
      </EmailInputArea>
      <PasswordInputArea>
        <PasswordInput type="password" placeholder={"비밀번호를 입력하세요"} />
        <PasswordCheckInput
          type="password"
          placeholder={"비밀번호를 다시 입력하세요"}
        />
      </PasswordInputArea>

      <UserAuthArea>
        <UserAuthButton>본인인증</UserAuthButton>
      </UserAuthArea>

      <RegisterButtonArea>
        <RegisterButton onClick={handleNextClick}>회원가입</RegisterButton>
      </RegisterButtonArea>
    </Container>
  );
};

export default RegisterContent;
