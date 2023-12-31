import styled from "styled-components";
import AddButtonSqure from "../../../../assets/icons/icon-add-button-squre.png";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 700px;
  background-color: #f0f0f0;
`;

export const ProductArea = styled.div`
  height: 700px;
  background-image: url(${AddButtonSqure});
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;

export const ProductText = styled.div``;
