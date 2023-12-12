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

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  background-color: #eee;
  border-radius: 12px;
  padding: 50px;
`;

export const ItemArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  height: 80%;
`;

export const ItemContainer = styled.div`
  width: calc(33.33% - 50px);
  height: 200px;
  background-color: #bbb;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
`;

export const ShoppingMallImage = styled.img`
  width: 100%;
  height: 70%;
  background-color: #fff;
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100px;
`;

const ButtonStyle = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const EditButton = styled(ButtonStyle)`
  background-color: #555;
`;

export const AddButton = styled(ButtonStyle)`
  background-color: #1a6dff;
`;
