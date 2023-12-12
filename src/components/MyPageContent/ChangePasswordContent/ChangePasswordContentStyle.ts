import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  min-height: 100vh;
`;

export const MainTitle = styled.div`
  margin: 50px auto;
  font-size: 50px;
  font-weight: bold;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
  padding: 50px;
  font-size: 20px;

  background-color: #eee;
  border-radius: 12px;
`;

const InfoTextStyle = styled.div`
  display: flex;
  align-items: start;
  font-size: 20px;
  margin-bottom: 5px;
`;

const InputStyle = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 12px;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
`;

export const PreviousPasswordArea = styled.div`
  margin-bottom: 20px;
`;

export const PreviousPasswordText = styled(InfoTextStyle)``;

export const PreviousPasswordInput = styled(InputStyle)``;

export const NewPasswordArea = styled.div`
  margin-bottom: 20px;
`;

export const NewPasswordText = styled(InfoTextStyle)``;

export const NewPasswordInput = styled(InputStyle)`
  width: 300px;
  height: 30px;
`;

export const NewPasswordCheckText = styled(InfoTextStyle)``;

export const NewPasswordCheckArea = styled.div`
  margin-bottom: 200px;
`;

export const NewPasswordCheckInput = styled(InputStyle)`
  width: 300px;
  height: 30px;
`;

export const SaveButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: #1a6dff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
