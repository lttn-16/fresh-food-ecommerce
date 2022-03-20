import React, { useState } from "react";
import img3 from "assets/images/bun-bo-2.png";
import img1 from "assets/images/goi-cuon-2.png";
import img2 from "assets/images/pho-ga-2.png";
import slideData from "assets/fake-data/slider";
import SliderItem from "../SliderItem";
import { Container, Control, ControlImg, ControlItem } from "./styles";

const Slider = () => {
  const [activeData, setActiveData] = useState(slideData[0]);

  const handleControl = (index) => {
    const data = slideData.find((data) => data.id === index);
    setActiveData(data);
  };

  return (
    <Container className={activeData.bgUrl}>
      <SliderItem
        id={activeData.id}
        title={activeData.title}
        imgUrl={activeData.imgUrl}
        productId={activeData.productId}
      />
      <Control>
        {controlImg.map((item, index) => (
          <ControlItem key={index} onClick={() => handleControl(index)}>
            <ControlImg src={item.url} alt="" />
          </ControlItem>
        ))}
      </Control>
    </Container>
  );
};

export default Slider;

const controlImg = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];
