import React, { useEffect, useState } from "react";
import { Container, Img, Left, Prview, Right } from "./styles";

const PreviewImage = ({ product }) => {
  const [privewImg, setPreviewImg] = useState("");

  useEffect(() => {
    product && setPreviewImg(product.img1);
  }, [product]);

  return (
    product && (
      <Container>
        <Left>
          <Img src={product.img1} onClick={() => setPreviewImg(product.img1)} />
          <Img src={product.img2} onClick={() => setPreviewImg(product.img2)} />
        </Left>
        <Right>
          <Prview src={privewImg} />
        </Right>
      </Container>
    )
  );
};

export default PreviewImage;
