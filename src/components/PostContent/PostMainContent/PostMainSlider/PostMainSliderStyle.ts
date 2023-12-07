import styled from "styled-components";

interface SliderImageProps {
  $activeIndex: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
  overflow: hidden;
`;

export const SliderImage = styled.div<SliderImageProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #f0f0f0;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $activeIndex }) => `translateX(-${$activeIndex * 100}%)`};
`;
