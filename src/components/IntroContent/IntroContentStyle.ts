import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`;

const IntroAreaDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  max-width: 100vw;
  height: 500px;
`;

export const IntroArea1 = styled(IntroAreaDesign)`
  height: 100vh;
  background-color: #1a6dff;
`;
export const IntroArea2 = styled(IntroAreaDesign)``;
export const IntroArea3 = styled(IntroAreaDesign)``;

const IntroImageDesign = styled.img`
  z-index: 1;
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #555;
`;

export const IntroImage1 = styled(IntroImageDesign)`
  height: 500px;
  border-radius: 30px;
  background-color: #fff;
`;

export const IntroImage2 = styled(IntroImageDesign)``;

export const IntroImage3 = styled(IntroImageDesign)``;

const TextDesign = styled.div`
  z-index: 2;
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
`;

export const IntroText1 = styled(TextDesign)`
  top: 35%;
  left: 25%;
  color: #fff;
`;

export const IntroText2 = styled(TextDesign)`
  top: 35%;
  right: 25%;
`;

export const IntroText3 = styled(TextDesign)`
  top: 35%;
  left: 25%;
`;
