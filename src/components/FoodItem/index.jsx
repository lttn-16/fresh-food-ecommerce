import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Img,
  ImgWrapper,
  Info,
  InfoLeft,
  InfoRight,
  Price,
  Title,
} from "./styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set } from "redux/Modal/ModalSlice";

const FoodItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    data && (
      <Container>
        <Link to={`/detail/${data.id}`}>
          <ImgWrapper>
            <Img src={data.img1} />
          </ImgWrapper>
        </Link>
        <Info>
          <Link to={`/detail/${data.id}`}>
            <InfoLeft>
              <Title>{data.title}</Title>
              <Price>{data.price}$</Price>
            </InfoLeft>
          </Link>
          <InfoRight onClick={() => dispatch(set(data))}>
            <i className="bx bx-cart-alt"></i>
          </InfoRight>
        </Info>
      </Container>
    )
  );
};

FoodItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    categoryId: PropTypes.number,
    categorySlug: PropTypes.string,
    size: PropTypes.arrayOf(PropTypes.string),
    slug: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default FoodItem;
