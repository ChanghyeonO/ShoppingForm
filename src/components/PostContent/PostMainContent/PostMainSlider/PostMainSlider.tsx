import React, { useState, useEffect } from "react";

import { Container, SliderImage } from "./PostMainSliderStyle";

const PostMainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderItemCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % sliderItemCount);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {Array.from({ length: sliderItemCount }, (_, index) => (
        <SliderImage key={index} $activeIndex={activeIndex}>
          {index + 1}
        </SliderImage>
      ))}
    </Container>
  );
};

export default PostMainSlider;
