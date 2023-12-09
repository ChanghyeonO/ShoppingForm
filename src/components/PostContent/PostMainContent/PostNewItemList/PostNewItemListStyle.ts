import styled from "styled-components";

export const NewListingArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const NewItem = styled.div`
  width: calc(33.33% - 160px);
  height: 200px;
  background-color: #eee;
  border-radius: 12px;
  cursor: pointer;
`;
