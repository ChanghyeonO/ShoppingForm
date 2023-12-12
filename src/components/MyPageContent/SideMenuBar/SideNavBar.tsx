import React from "react";
import {
  Container,
  TopContainer,
  MyShoppingMallLink,
  ChangePasswordLink,
  RemoveAccountLink,
} from "./SideNavBarStyle";

const SideNavBar = () => {
  return (
    <Container>
      <TopContainer>
        <MyShoppingMallLink to={"/mypage/my-shoppingmall"}>
          내 쇼핑몰
        </MyShoppingMallLink>
        <ChangePasswordLink to={"/mypage/change-password"}>
          비밀번호 수정
        </ChangePasswordLink>
      </TopContainer>
      <RemoveAccountLink to={"/mypage/remove-account"}>
        회원탈퇴
      </RemoveAccountLink>
    </Container>
  );
};

export default SideNavBar;
