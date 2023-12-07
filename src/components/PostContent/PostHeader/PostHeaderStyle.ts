import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background-color: #bbb;
`;

export const LogoArea = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-size: cover;
  background-color: #888;
  cursor: pointer;
`;

export const MenuArea = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  gap: 50px;
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #fff;
  cursor: pointer;
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
