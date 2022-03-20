import Button from "components/Button";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "redux/Cart/cartSlice";
import { remove } from "redux/Modal/ModalSlice";
import {
  ButtonText,
  ButtonWrapper,
  Container,
  InfoTitle,
  Price,
  QuanlityIcon,
  QuanlityNumber,
  QuanlityWrapper,
  Size,
  SizeList,
  Title,
  Wrapper,
} from "./styles";

const ProductInfo = ({ product, isModal = false }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (size === undefined) {
      toast.error("Please choose size!");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        toast.success("Added Success!");
        setSize(undefined);
        setQuantity(1);
      } else {
        toast.error("Added Fail!");
      }
    }
  };

  const goToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        dispatch(remove());
        navigate("/cart");
      } else {
        toast.error("Added Fail!");
      }
    }
  };

  useEffect(() => {
    setQuantity(1);
    setSize(undefined);
  }, [product]);

  return (
    <Container>
      <Title>{product.title}</Title>
      <Price>{product.price} $</Price>
      <Wrapper>
        <InfoTitle>Sizes</InfoTitle>
        <SizeList>
          {product.size.map((item, index) => (
            <Size
              active={item === size}
              key={index}
              onClick={() => setSize(item)}
            >
              {item}
            </Size>
          ))}
        </SizeList>
      </Wrapper>
      <Wrapper>
        <InfoTitle>Quanlity</InfoTitle>
        <QuanlityWrapper>
          <QuanlityIcon onClick={() => updateQuantity("minus")}>
            <i className="bx bx-minus transform translate-y-0.2"></i>
          </QuanlityIcon>
          <QuanlityNumber>{quantity}</QuanlityNumber>
          <QuanlityIcon onClick={() => updateQuantity("plus")}>
            <i className="bx bx-plus transform translate-y-0.2"></i>
          </QuanlityIcon>
        </QuanlityWrapper>
      </Wrapper>
      <ButtonWrapper isModal={isModal}>
        <Button type="primary">
          <ButtonText onClick={addToCart}>Add to cart</ButtonText>
        </Button>

        <Button type="primary">
          <ButtonText onClick={goToCart}>Buy now</ButtonText>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ProductInfo;
