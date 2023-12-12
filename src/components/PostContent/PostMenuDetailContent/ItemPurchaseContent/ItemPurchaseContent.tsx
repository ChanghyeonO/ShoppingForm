import React, { useState } from "react";

import {
  Container,
  ImageArea,
  ProductImage,
  RightContentArea,
  ItemTextArea,
  ItemName,
  ItemDetail,
  ItemOptionArea,
  ItemOptionButton,
  ItemCountArea,
  MinusButton,
  CountInput,
  PlusButton,
  PurchaseArea,
  ShoppingBasketButton,
  PerchaseButton,
} from "./ItemPurchaseContentStyle";

const ItemPurchaseContent = () => {
  const [count, setCount] = useState<number>(1);

  const MinusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const PlusCount = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <ImageArea>
        <ProductImage />
      </ImageArea>
      <RightContentArea>
        <ItemTextArea>
          <ItemName>제품명</ItemName>
          <ItemDetail>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim
            nesciunt, sapiente, modi magnam culpa adipisci, alias odit
            voluptatibus quia quod aliquam natus expedita voluptate delectus.
            Rerum, velit voluptas? Exercitationem!
          </ItemDetail>
        </ItemTextArea>
        <ItemOptionArea>
          <ItemOptionButton>옵션1</ItemOptionButton>
          <ItemOptionButton>옵션2</ItemOptionButton>
          <ItemOptionButton>옵션3</ItemOptionButton>
          <ItemOptionButton>옵션4</ItemOptionButton>
          <ItemOptionButton>옵션5</ItemOptionButton>
          <ItemOptionButton>옵션6</ItemOptionButton>
        </ItemOptionArea>
        <ItemCountArea>
          <MinusButton onClick={MinusCount}>-</MinusButton>
          <CountInput value={count} readOnly />
          <PlusButton onClick={PlusCount}>+</PlusButton>
        </ItemCountArea>
        <PurchaseArea>
          <ShoppingBasketButton>장바구니</ShoppingBasketButton>
          <PerchaseButton>구매하기</PerchaseButton>
        </PurchaseArea>
      </RightContentArea>
    </Container>
  );
};

export default ItemPurchaseContent;
