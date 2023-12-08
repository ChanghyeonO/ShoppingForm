import styled from "styled-components";
import AddButtonCircle from "../../../assets/icons/icon-add-button-squre.png";

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  height: 80px;
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
  border: none;
`;

export const Logo = styled.div`
  width: 80%;
  height: 100%;
  background-size: cover;
  background-image: url(${AddButtonCircle});
  cursor: pointer;
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  gap: 50px;
`;

export const Menu = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  transition: background-color 0.5s, font-size 0.5s;
  &:hover {
    background-color: #eee;
    font-size: 30px;
    color: #000;
  }
`;

export const UserProfileArea = styled.div`
  display: flex;
  gap: 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const ContentLogin = styled.div`
  cursor: pointer;
`;

export const ContentRegister = styled.div`
  cursor: pointer;
`;
