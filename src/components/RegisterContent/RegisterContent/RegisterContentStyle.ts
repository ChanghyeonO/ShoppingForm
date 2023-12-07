import styled from "styled-components";
import MainLogo from "../../../assets/icons/shopping-online.png";

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
`;

export const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const InputButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 350px;
  height: 15px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  background-color: #eee;
`;

export const NickNameInputArea = styled(InputButtonArea)``;

export const NickNameInput = styled(Input)``;

export const EmailInputArea = styled(InputButtonArea)``;

export const EmailInput = styled(Input)``;

export const PasswordInputArea = styled(InputButtonArea)``;

export const PasswordInput = styled(Input)`
  margin-bottom: 20px;
`;

export const PasswordCheckInput = styled(Input)``;

export const LoginButtonArea = styled(InputButtonArea)`
  flex-direction: column;
`;

const Button = styled.button`
  width: 390px;
  height: 55px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: #eee;
`;

export const RegisterButtonArea = styled(InputButtonArea)``;

export const RegisterButton = styled(Button)`
  color: #fff;
  background-color: #1a6dff;
`;

export const UserAuthArea = styled(InputButtonArea)``;

export const UserAuthButton = styled(Button)``;
