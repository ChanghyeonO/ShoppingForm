import React, { useState } from "react";
import {
  Container,
  DropdownArea,
  SortAddButtonArea,
  DropdownButton,
  Dropdown,
  Styleli,
  AddButton,
  ItemArea,
  ItemBox,
  ItemImage,
  TextArea,
  ItemTitle,
  ItemPrice,
} from "./PostPagenationStyle";

const items = [
  {
    id: 1,
    title: "아이템 1",
    price: 10000,
    image: "이미지 URL 1",
  },
  {
    id: 2,
    title: "아이템 2",
    price: 15000,
    image: "이미지 URL 2",
  },
  {
    id: 3,
    title: "아이템 3",
    price: 8000,
    image: "이미지 URL 3",
  },
  {
    id: 4,
    title: "아이템 4",
    price: 20000,
    image: "이미지 URL 4",
  },
  {
    id: 5,
    title: "아이템 5",
    price: 12000,
    image: "이미지 URL 5",
  },
  {
    id: 6,
    title: "아이템 6",
    price: 18000,
    image: "이미지 URL 6",
  },
  {
    id: 7,
    title: "아이템 7",
    price: 9000,
    image: "이미지 URL 7",
  },
  {
    id: 8,
    title: "아이템 8",
    price: 25000,
    image: "이미지 URL 8",
  },
];

const PostPagenation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [DropDownTitle, setDropDownTitle] = useState("정렬 ▼");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (title: string) => {
    setDropDownTitle(title);
    setIsDropdownOpen(false);
  };

  return (
    <Container>
      <SortAddButtonArea>
        <DropdownArea>
          <DropdownButton onClick={toggleDropdown}>
            {DropDownTitle}
          </DropdownButton>
          {isDropdownOpen && (
            <Dropdown>
              <Styleli onClick={() => handleItemClick("최신 등록")}>
                최신 등록
              </Styleli>
              <Styleli onClick={() => handleItemClick("높은 가격")}>
                높은 가격
              </Styleli>
              <Styleli onClick={() => handleItemClick("낮은 가격")}>
                낮은 가격
              </Styleli>
            </Dropdown>
          )}
        </DropdownArea>
        <AddButton>추가하기</AddButton>
      </SortAddButtonArea>
      <ItemArea>
        {items.map(item => (
          <ItemBox key={item.id}>
            <ItemImage src={item.image} alt={item.title} />
            <TextArea>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>{item.price}원</ItemPrice>
            </TextArea>
          </ItemBox>
        ))}
      </ItemArea>
    </Container>
  );
};

export default PostPagenation;
