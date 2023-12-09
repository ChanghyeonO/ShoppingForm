import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import PostMenuImage from "./PostMenuImage/PostMenuImage";
import PostPagenation from "./PostProductList/PostPagenation";
import PostFooter from "../PostFooter/PostFooter";

import { Container } from "./PostMenuContentStyle";

const PostMenuContent = () => {
  return (
    <Container>
      <PostHeader />
      <PostMenuImage />
      <PostPagenation />
      <PostFooter />
    </Container>
  );
};

export default PostMenuContent;
