import React from "react";

import {
  Container,
  LogoArea,
  Logo,
  MenuArea,
  Menu,
  UserProfileArea,
  ContentLogin,
  ContentRegister,
} from "./PostHeaderStyle";

const PostHeader = () => {
  return (
    <Container>
      <LogoArea>
        <Logo />
      </LogoArea>
      <MenuArea>
        <Menu>메뉴1</Menu>
        <Menu>메뉴2</Menu>
        <Menu>메뉴3</Menu>
        <Menu>메뉴4</Menu>
        <Menu>메뉴5</Menu>
      </MenuArea>
      <UserProfileArea>
        <ContentLogin>로그인</ContentLogin>
        <ContentRegister>회원가입</ContentRegister>
      </UserProfileArea>
    </Container>
  );
};

export default PostHeader;
