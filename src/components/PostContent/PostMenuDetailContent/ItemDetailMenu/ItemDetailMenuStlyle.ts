import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  margin: 0 auto;
  max-width: 70vw;
  min-height: 100vh;
  border-radius: 12px;
  margin-bottom: 100px;
  overflow: hidden;
`;

export const InnerContent = styled.div`
  width: 100%;
  height: 500px;
`;

export const ImageBackground = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 100px 0 100px;
`;

export const TextArea = styled.div`
  width: 30%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: 50px;
  margin-bottom: 50px;
`;

export const AddButton = styled.button`
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
