import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Price, PriceWrapper, Title, Button } from "./styles";
import PropTypes from "prop-types";

const Total = ({ price, product }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>You have {product} product in your cart</Title>
      <PriceWrapper>
        <Title>Total:</Title>
        <Price>{price} $</Price>
      </PriceWrapper>
      <Button>Checkout</Button>
      <Button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

Total.propTypes = {
  price: PropTypes.number.isRequired,
  product: PropTypes.number.isRequired,
};

export default Total;
