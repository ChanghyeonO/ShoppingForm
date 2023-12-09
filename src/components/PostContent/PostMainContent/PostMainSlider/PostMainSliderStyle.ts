import styled from "styled-components";
import AddButtonSqure from "../../../../assets/icons/icon-add-button-squre.png";

interface SliderImageProps {
  $activeIndex: number;
}

export const Container = styled.div`
  max-width: 100vw;
  height: 700px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  background-color: #f0f0f0;
`;

export const SliderImage = styled.div<SliderImageProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $activeIndex }) => `translateX(-${$activeIndex * 100}%)`};
  background-image: url(${AddButtonSqure});
  background-repeat: no-repeat;
  background-position: center;
`;
