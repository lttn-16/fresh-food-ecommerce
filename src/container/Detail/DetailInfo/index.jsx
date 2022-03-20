import React, { useState } from "react";
import {
  ButtonText,
  Container,
  Descritpion,
  Title,
  Wrapper,
  Button,
} from "./styles";

const DetailInfo = ({ product }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Container>
      <Title>Food Detail</Title>
      <Wrapper>
        <Descritpion
          expand={expand}
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></Descritpion>
        <Button expand={expand} onClick={() => setExpand(!expand)}>
          <ButtonText>{expand ? "See less" : "See more"}</ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default DetailInfo;
