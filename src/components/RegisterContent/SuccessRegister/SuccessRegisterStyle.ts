import styled from "styled-components";
import MainLogo from "../../../assets/icons/shopping-online.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${MainLogo});
  background-size: cover;
`;

export const MainTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

export const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const LoginButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  margin-bottom: 20px;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 390px;
  height: 55px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background-color: #1a6dff;
`;
