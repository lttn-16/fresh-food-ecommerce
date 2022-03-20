import { getCartItemsInfo } from "assets/fake-data/products";
import Helmet from "components/Helmet";
import CartItem from "container/Cart/Item";
import Total from "container/Cart/Total";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CartList,
  Container,
  Img,
  ImgContainer,
  NodataContainer,
  NodataTitle,
} from "./styles";
import noDataIcon from "assets/images/no-data.svg";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.value);

  const [cartProducts, setCartProducts] = useState(getCartItemsInfo(cartItems));

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Shopping Cart">
      {cartProducts && totalPrice ? (
        <>
          <Container>
            <Total price={totalPrice} product={totalProducts} />
            <CartList>
              {cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </CartList>
          </Container>
        </>
      ) : (
        <NodataContainer>
          <ImgContainer>
            <Img src={noDataIcon} alt="no data" width={300} height={300} />
          </ImgContainer>
          <NodataTitle>There are no items in your cart !</NodataTitle>
          <Button
            type="primary"
            onClick={() => {
              navigate("/menu");
            }}
          >
            BUY NOW
          </Button>
        </NodataContainer>
      )}
    </Helmet>
  );
};

export default Cart;
