import React from "react";

import { Container, ContentArea, Title, NoticeText } from "./PostNoticeStyle";

const PostNotice = () => {
  return (
    <Container>
      <ContentArea>
        <Title>공지사항</Title>
        <NoticeText></NoticeText>
      </ContentArea>
    </Container>
  );
};

export default PostNotice;
