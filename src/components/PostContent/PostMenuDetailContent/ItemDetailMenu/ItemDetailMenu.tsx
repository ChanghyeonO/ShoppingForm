import React from "react";

import {
  Container,
  InnerContent,
  ImageBackground,
  TextArea,
  ButtonArea,
  AddButton,
} from "./ItemDetailMenuStlyle";

const ItemDetailMenu = () => {
  return (
    <>
      <Container>
        <InnerContent>
          <ImageBackground>
            <TextArea>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dignissimos, saepe, ut quas, beatae ducimus vitae expedita magni
              at rem dolor officia ex velit ipsum itaque aliquam aut tempore
              laborum?
            </TextArea>
          </ImageBackground>
        </InnerContent>
        <InnerContent>
          <ImageBackground>
            <TextArea>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dignissimos, saepe, ut quas, beatae ducimus vitae expedita magni
              at rem dolor officia ex velit ipsum itaque aliquam aut tempore
              laborum?
            </TextArea>
          </ImageBackground>
        </InnerContent>
      </Container>

      <ButtonArea>
        <AddButton>추가하기</AddButton>
      </ButtonArea>
    </>
  );
};

export default ItemDetailMenu;
