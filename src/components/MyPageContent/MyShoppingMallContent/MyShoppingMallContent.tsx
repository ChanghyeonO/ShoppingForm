import React from "react";
import SideNavBar from "../SideMenuBar/SideNavBar";

import {
  Container,
  MainTitle,
  ContentArea,
  RightContent,
  ItemArea,
  ItemContainer,
  ShoppingMallImage,
  ItemTitle,
  ButtonArea,
  EditButton,
  AddButton,
} from "./MyShoppingMallContentStyle";

const DummyItems = [
  {
    id: 1,
    title: "쇼핑몰1",
    image: "이미지 URL1",
  },
  {
    id: 2,
    title: "쇼핑몰2",
    image: "이미지 URL2",
  },
  {
    id: 3,
    title: "쇼핑몰3",
    image: "이미지 URL3",
  },
  {
    id: 4,
    title: "쇼핑몰4",
    image: "이미지 URL4",
  },
  {
    id: 5,
    title: "쇼핑몰5",
    image: "이미지 URL5",
  },
];

const MyShoppingMallContent = () => {
  return (
    <Container>
      <MainTitle>마이페이지</MainTitle>
      <ContentArea>
        <SideNavBar />
        <RightContent>
          <ItemArea>
            {DummyItems.map(item => (
              <ItemContainer key={item.id}>
                <ShoppingMallImage src={item.image} />
                <ItemTitle>{item.title}</ItemTitle>
              </ItemContainer>
            ))}
          </ItemArea>
          <ButtonArea>
            <EditButton>수정하기</EditButton>
            <AddButton> 추가하기</AddButton>
          </ButtonArea>
        </RightContent>
      </ContentArea>
    </Container>
  );
};

export default MyShoppingMallContent;
