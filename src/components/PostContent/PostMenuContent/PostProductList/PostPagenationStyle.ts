import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 1000px;
`;

export const SortAddButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 50px;
  background-color: #bbb;
  padding: 10px 100px;
`;

export const DropdownArea = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: #fff;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 120px;
  height: 200px;
  top: 40px;
  background-color: #eee;
  z-index: 1;
  padding: 0;
  overflow: hidden;
`;

export const Styleli = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 33.33%;
  list-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: #bbb;
    font-size: 20px;
  }
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

export const ItemArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  max-width: 100%;
  height: auto;
  padding: 100px;
`;

export const ItemBox = styled.div`
  width: calc(25% - 100px);
  height: 250px;
  background-color: #eee;
  border-radius: 12px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  min-width: 100%;
  min-height: 200px;
  border-radius: 12px;
  background-color: #bbb;
  font-size: 20px;
  font-weight: bold;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 50px;
`;

export const ItemTitle = styled.div``;

export const ItemPrice = styled.div``;
