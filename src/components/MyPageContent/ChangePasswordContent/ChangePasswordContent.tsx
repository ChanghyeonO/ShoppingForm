import React from "react";
import SideNavBar from "../SideMenuBar/SideNavBar";

import {
  Container,
  MainTitle,
  ContentArea,
  Content,
  PreviousPasswordArea,
  PreviousPasswordText,
  PreviousPasswordInput,
  NewPasswordArea,
  NewPasswordText,
  NewPasswordInput,
  NewPasswordCheckArea,
  NewPasswordCheckInput,
  NewPasswordCheckText,
  SaveButton,
} from "./ChangePasswordContentStyle";

const ChangePasswordContent = () => {
  return (
    <Container>
      <MainTitle>마이페이지</MainTitle>
      <ContentArea>
        <SideNavBar />
        <Content>
          <PreviousPasswordArea>
            <PreviousPasswordText>기존 비밀번호</PreviousPasswordText>
            <PreviousPasswordInput type="password" />
          </PreviousPasswordArea>
          <NewPasswordArea>
            <NewPasswordText>새 비밀번호</NewPasswordText>
            <NewPasswordInput type="password" />
          </NewPasswordArea>
          <NewPasswordCheckArea>
            <NewPasswordCheckText>새 비밀번호 확인</NewPasswordCheckText>
            <NewPasswordCheckInput type="password" />
          </NewPasswordCheckArea>
          <SaveButton>저장하기</SaveButton>
        </Content>
      </ContentArea>
    </Container>
  );
};

export default ChangePasswordContent;
