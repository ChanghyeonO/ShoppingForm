import styled from "styled-components";
import MainLogo from "../../assets/icons/shopping-online.png";
import InstagramImage from "../../assets/icons/instagram.png";
import emailImage from "../../assets/icons/gmail.png";
import GithubImage from "../../assets/icons/github.png";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${MainLogo});
  background-size: cover;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100%;
`;

export const WhoMadeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  border-bottom: 2px solid #888;
`;

export const WhoMade = styled.div`
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
