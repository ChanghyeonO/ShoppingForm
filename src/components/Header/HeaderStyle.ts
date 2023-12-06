import styled from "styled-components";
import MainLogo from "../../assets/icons/shopping-online.png";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  max-width: 100%;
  height: 70px;
  background-color: #1a6dff;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const LogoArea = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${MainLogo});
  background-size: cover;
`;

export const AuthArea = styled.div`
  display: flex;
  gap: 30px;
`;

const AuthButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const FontStyle = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const LoginButton = styled(AuthButton)``;

export const LoginText = styled(FontStyle)``;

export const RegisterButton = styled(AuthButton)``;

export const RegisterText = styled(FontStyle)``;
