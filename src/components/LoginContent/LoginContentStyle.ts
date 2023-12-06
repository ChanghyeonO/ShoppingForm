import styled from "styled-components";
import MainLogo from "../../assets/icons/shopping-online.png";
import KakaoLogo from "../../assets/images/kakao.png";

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
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
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

export const EmailInputArea = styled(InputButtonArea)`
  margin-bottom: 20px;
`;

export const EmailInput = styled(Input)``;

export const PasswordInputArea = styled(InputButtonArea)``;

export const PasswordInput = styled(Input)`
  margin-bottom: 20px;
`;

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

export const LoginButton = styled(Button)`
  background-color: #1a6dff;
  margin-bottom: 20px;
  color: #fff;
`;

export const KakaoLoginButton = styled(Button)`
  background-image: url(${KakaoLogo});
  background-size: 35px;
  background-repeat: no-repeat;
  background-position: 20px center;
  background-color: #fee500;
  margin-bottom: 20px;
`;

export const RegisterButtonArea = styled(InputButtonArea)``;

export const RegisterButton = styled(Button)``;

export const FindAccountArea = styled(InputButtonArea)`
  gap: 50px;
`;

const FindButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const FindEmailArea = styled.div``;

export const FindEmailButton = styled(FindButton)``;

export const FindPasswordArea = styled.div``;

export const FindPasswordButton = styled(FindButton)``;
