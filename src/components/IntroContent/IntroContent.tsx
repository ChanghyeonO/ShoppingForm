import React from "react";

import {
  Container,
  IntroArea1,
  IntroArea2,
  IntroArea3,
  IntroImage1,
  IntroImage2,
  IntroImage3,
  IntroText1,
  IntroText2,
  IntroText3,
} from "./IntroContentStyle";

const IntroContent = () => {
  return (
    <Container>
      <IntroArea1>
        <IntroText1>
          간단하게 만드는 쇼핑몰 페이지!
          <br /> 이제 더이상 비싸게, 어렵게 만들지 마세요!
          <br />
          10분이면 간단한 쇼핑몰 페이지 완성!
        </IntroText1>
        <IntroImage1 />
      </IntroArea1>
      <IntroArea2>
        <IntroImage2 />
        <IntroText2>
          간단하게 만드는 쇼핑몰 페이지!
          <br /> 이제 더이상 비싸게, 어렵게 만들지 마세요!
          <br />
          10분이면 간단한 쇼핑몰 페이지 완성!
        </IntroText2>
      </IntroArea2>
      <IntroArea3>
        <IntroText3>
          간단하게 만드는 쇼핑몰 페이지!
          <br /> 이제 더이상 비싸게, 어렵게 만들지 마세요!
          <br />
          10분이면 간단한 쇼핑몰 페이지 완성!
        </IntroText3>
        <IntroImage3 />
      </IntroArea3>
    </Container>
  );
};

export default IntroContent;
