import styled from "styled-components";
import AddButtonCircle from "../../../assets/icons/icon-add-button-squre.png";
import InstagramImage from "../../../assets/icons/instagram.png";
import emailImage from "../../../assets/icons/gmail.png";
import GithubImage from "../../../assets/icons/github.png";

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  border-top: 1px solid #888;
`;

export const LogoArea = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LogoImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${AddButtonCircle});
  cursor: pointer;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 218px;
  height: 100%;
`;

export const WhoMadeArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 50%;
  border-bottom: 2px solid #888;
`;

export const WhoMade = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const TelNumber = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ContactArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const LogoDesign = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-size: cover;
  cursor: pointer;
`;

export const EmailLogo = styled(LogoDesign)`
  background-image: url(${emailImage});
`;

export const InstaLogo = styled(LogoDesign)`
  background-image: url(${InstagramImage});
`;

export const GithubLogo = styled(LogoDesign)`
  background-image: url(${GithubImage});
`;
