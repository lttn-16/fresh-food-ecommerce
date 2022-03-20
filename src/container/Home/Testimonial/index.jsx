import React from "react";
import {
  Comment,
  Container,
  Content,
  Img,
  Info,
  List,
  Name,
  Rating,
  Wrapper,
} from "./styles";
import reviewData from "assets/fake-data/testimonial";

const Testimonial = () => {
  return (
    <Container>
      <List data-aos="zoom-in">
        {reviewData.map((item) => (
          <ReviewItem active={item.id === 1} key={item.id} data={item} />
        ))}
      </List>
    </Container>
  );
};

export default Testimonial;

const ReviewItem = ({ data, active }) => {
  return (
    <Wrapper active={active}>
      <Content>
        <Comment>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore
          nisi non molestias, minus laboriosam nostrum impedit iure facilis odio
          unde quia ad sunt corrupti dolores ratione voluptatibus quidem
          explicabo.
        </Comment>
        <Img src={data.img} />
      </Content>
      <Info>
        <Name>{data.name}</Name>
        <Rating>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
        </Rating>
      </Info>
    </Wrapper>
  );
};
