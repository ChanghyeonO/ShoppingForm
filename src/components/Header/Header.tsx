import React, { useState, useEffect } from "react";

import {
  Container,
  LogoArea,
  LogoImage,
  AuthArea,
  LoginButton,
  LoginText,
  RegisterButton,
  RegisterText,
} from "./HeaderStyle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      style={{
        backgroundColor: isScrolled ? "#fff" : "#1a6dff",
      }}
    >
      <LogoArea>
        <LogoImage />
      </LogoArea>
      <AuthArea>
        <LoginButton to="/login">
          <LoginText style={{ color: isScrolled ? "#000" : "#fff" }}>
            로그인
          </LoginText>
        </LoginButton>
        <RegisterButton to={"/service-terms"}>
          <RegisterText style={{ color: isScrolled ? "#000" : "#fff" }}>
            회원가입
          </RegisterText>
        </RegisterButton>
      </AuthArea>
    </Container>
  );
};

export default Header;
