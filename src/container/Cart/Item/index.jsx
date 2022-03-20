import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateItem } from "redux/Cart/cartSlice";
import {
  Container,
  Delete,
  Img,
  Price,
  QuanlityIcon,
  QuanlityNumber,
  QuanlityWrapper,
  Title,
  Wrapper,
  WrapperInfo,
} from "./styles";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (type) => {
    if (type === "plus") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }

    if (type === "minus") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <Container>
      <Wrapper>
        <Link to={`/detail/${item.product.id}`}>
          <Img src={item.product.img1} />
        </Link>
      </Wrapper>
      <WrapperInfo>
        <Title>
          <Link to={`/detail/${item.product.id}`}>
            {item.product.title} -{" "}
            <span className="uppercase">{item.size}</span>
          </Link>
        </Title>
        <Price>{item.price}$</Price>
        <QuanlityWrapper>
          <QuanlityIcon onClick={() => updateQuantity("minus")}>
            <i className="bx bx-minus transform translate-y-0.2"></i>
          </QuanlityIcon>
          <QuanlityNumber>{quantity}</QuanlityNumber>
          <QuanlityIcon onClick={() => updateQuantity("plus")}>
            <i className="bx bx-plus transform translate-y-0.2"></i>
          </QuanlityIcon>
        </QuanlityWrapper>
        <Delete onClick={removeCartItem}>
          <i className="bx bx-trash"></i>
        </Delete>
      </WrapperInfo>
    </Container>
  );
};

export default CartItem;
