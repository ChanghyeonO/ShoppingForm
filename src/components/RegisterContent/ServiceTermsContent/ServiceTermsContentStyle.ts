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

export const TermsArea = styled.div`
  margin-bottom: 20px;
`;

export const Terms = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  overflow: auto;
  line-height: 30px;
  background-color: #eee;
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

export const AgreeInputArea = styled.div`
  display: flex;
  width: 540px;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  margin-bottom: 20px;
`;

export const AgreeInput = styled.input`
  width: 25px;
  height: 25px;
`;

export const AgreeText = styled.div``;

export const AgreeButtonArea = styled(InputButtonArea)``;

export const AgreeButton = styled(Button)`
  color: #fff;
  background-color: #1a6dff;
`;
