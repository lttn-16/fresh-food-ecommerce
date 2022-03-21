import { contactData } from "assets/fake-data/contact";
import Helmet from "components/Helmet";
import Form from "container/Contact/Form";
import React from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Map,
  Right,
  Title,
  Wrapper,
} from "./styles";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <Container>
        <Left>
          <Header>CONTACT INFORMATION</Header>
          {contactData.map((item, index) => (
            <Wrapper key={index}>
              <Title>{item.title}: </Title>
              <Content>{item.content}</Content>
            </Wrapper>
          ))}
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.3437197313006!2d-93.24611908528563!3d44.85529698188744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62f6ebb6a867d%3A0xc82c7aae82fea18d!2s244%20West%20Market%2C%20Bloomington%2C%20MN%2055425%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1647696466404!5m2!1svi!2s"
              width="100%"
              height="450"
              title="map"
              loading="lazy"
            ></iframe>
          </Map>
        </Left>
        <Right>
          <Header>CONTACT FORM</Header>
          <Form />
        </Right>
      </Container>
    </Helmet>
  );
};

export default Contact;
