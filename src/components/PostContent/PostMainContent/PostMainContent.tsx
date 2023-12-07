import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import PostMainSlider from "./PostMainSlider/PostMainSlider";
import PostNewItemList from "./PostNewItemList/PostNewItemList";
import PostFooter from "../PostFooter/PostFooter";
import { Container } from "./PostMainContentStyle";

const PostMainContent = () => {
  return (
    <Container>
      <PostHeader />
      <PostMainSlider />
      <PostNewItemList />
      <PostFooter />
    </Container>
  );
};

export default PostMainContent;
