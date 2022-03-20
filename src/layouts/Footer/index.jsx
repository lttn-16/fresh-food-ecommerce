import React from "react";
import { Address, Col, Container, Nav, Text, Title, Wrapper } from "./styles";

const Footer = () => {
  return (
    <Container className="bg-[url('./assets/images/footer.jpg')]">
      <Wrapper>
        <Col>
          <Title>Freshfood</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quas harum? Atque eius quaerat fuga sint molestiae illo corrupti
            vitae voluptatibus. Dicta rerum est delectus perspiciatis nemo nihil
            autem! Doloremque?
          </Text>
          <Address>
            <Text>Email: example@mail.com</Text>
            <Text>Phone: +00 123 456 789</Text>
            <Text>Website: freshfood.com</Text>
          </Address>
        </Col>
        <Col>
          <Title>About us</Title>
          <Nav>
            <Text>Chefs</Text>
            <Text>Menu</Text>
            <Text>About</Text>
            <Text>Testimonials</Text>
          </Nav>
        </Col>
        <Col>
          <Title>Subscribe & media</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quas harum? Atque eius quaerat fuga sint molestiae illo corrupti
            vitae voluptatibus. Dicta rerum est delectus perspiciatis nemo nihil
            autem! Doloremque?
          </Text>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Footer;
