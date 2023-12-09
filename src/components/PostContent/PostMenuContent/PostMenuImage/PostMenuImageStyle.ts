import styled from "styled-components";
import AddButtonSqure from "../../../../assets/icons/icon-add-button-squre.png";

export const Container = styled.div`
  max-width: 100vw;
  height: 500px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${AddButtonSqure});
`;
