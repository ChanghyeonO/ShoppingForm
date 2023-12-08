import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: 800px;
  border-top: 1px solid #eee;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const NoticeText = styled.textarea`
  width: 80%;
  height: 100%;
  padding: 50px;
  border: 2px solid #eee;
  resize: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  overflow: auto;
`;
