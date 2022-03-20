import { aboutData, headingData } from "assets/fake-data/about";
import Helmet from "components/Helmet";
import React from "react";
import {
  Container,
  Content,
  Heading,
  HeadingContent,
  Title,
  Wrapper,
} from "./styles";

const About = () => {
  return (
    <Helmet title="About">
      <Container>
        <Heading>about fresh food</Heading>
        <HeadingContent
          dangerouslySetInnerHTML={{ __html: headingData.content }}
        ></HeadingContent>
        {aboutData.map((data, index) => (
          <Wrapper key={index}>
            <Title>{data.title}</Title>
            <Content
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></Content>
          </Wrapper>
        ))}
      </Container>
    </Helmet>
  );
};

export default About;
