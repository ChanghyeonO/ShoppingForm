import React from "react";

import { Container, ProductArea, ProductText } from "./PostProductStyle";

const PostProduct = () => {
  return (
    <Container>
      <ProductArea>
        <ProductText />
      </ProductArea>
      <ProductArea>
        <ProductText />
      </ProductArea>
    </Container>
  );
};

export default PostProduct;
