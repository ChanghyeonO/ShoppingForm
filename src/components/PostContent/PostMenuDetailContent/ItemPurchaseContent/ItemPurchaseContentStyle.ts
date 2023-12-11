import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  max-width: 100vw;
  padding: 50px;
  height: 600px;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: #eee;
`;

export const RightContentArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
`;

export const ItemTextArea = styled.div`
  width: 100%;
  height: 60%;
`;

export const ItemName = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
`;

export const ItemDetail = styled.div`
  height: 250px;
  font-size: 30px;
  background-color: #eee;
  border-radius: 12px;
  overflow: auto;
`;

export const ItemOptionArea = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ItemOptionButton = styled.button`
  width: calc(33.33% - 8px);
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

export const ItemCountArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  gap: 10px;
`;

export const MinusButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const CountInput = styled.input`
  width: 100px;
  height: 35px;
  border: none;
  background-color: #eee;
  border-radius: 8px;
`;

export const PlusButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const PurchaseArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 10%;
  gap: 10px;
`;

export const ShoppingBasketButton = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

export const PerchaseButton = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;
