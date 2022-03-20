import React from "react";
import aboutBg from "assets/images/about.jpg";
import {
  Container,
  Description,
  Img,
  ImgWrapper,
  Info,
  Title,
  TitleGreen,
} from "./styles";

const About = () => {
  return (
    <Container>
      <ImgWrapper data-aos="fade-up">
        <Img src={aboutBg} alt="background" />
        <Info>
          <Title>
            <TitleGreen>We </TitleGreen>create
            <TitleGreen> delicious </TitleGreen>
            memories for <TitleGreen> you</TitleGreen>
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            natus placeat et eos, dignissimos voluptatem tempora necessitatibus
            doloribus! Eum qui doloribus odio dolor tenetur nihil impedit vero
            magni, distinctio soluta!
          </Description>
        </Info>
      </ImgWrapper>
    </Container>
  );
};

export default About;
