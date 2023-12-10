import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import ItemPurchaseContent from "./ItemPurchaseContent/ItemPurchaseContent";
import ItemDetailMenu from "./ItemDetailMenu/ItemDetailMenu";
import PostFooter from "../PostFooter/PostFooter";
import { Container } from "./PostMenuDetailContentStyle";

const PostMenuDetailContent = () => {
  return (
    <Container>
      <PostHeader />
      <ItemPurchaseContent />
      <ItemDetailMenu />
      <PostFooter />
    </Container>
  );
};

export default PostMenuDetailContent;
