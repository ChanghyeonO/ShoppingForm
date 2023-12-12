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

export const Terms = styled.div`
  max-width: 100%;
  height: 300px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  overflow: auto;
  line-height: 30px;
  margin-bottom: 20px;
  overflow: scroll;
  background-color: #999;
  border-radius: 12px;
`;

export const AgreeInputArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  margin-bottom: 58px;
`;

export const AgreeInput = styled.input`
  width: 25px;
  height: 25px;
`;

export const AgreeText = styled.div``;

export const RemoveButton = styled.button`
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
