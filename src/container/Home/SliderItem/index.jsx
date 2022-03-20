import PropTypes from "prop-types";
import React from "react";
import Button from "components/Button";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  ButtonText,
  Container,
  Description,
  Img,
  ImgWrapper,
  Info,
  Text,
  Title,
} from "./styles";

import "./transition.css";
import { Link } from "react-router-dom";

const SliderItem = ({ title, imgUrl, id, productId }) => {
  return (
    <Container>
      <Info>
        <TransitionGroup>
          <CSSTransition key={id} timeout={900} classNames="message">
            <Title>{title}</Title>
          </CSSTransition>
        </TransitionGroup>

        <Description>
          <TransitionGroup>
            <CSSTransition key={id} timeout={900} classNames="message">
              <Text>
                {title} lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sequi corrupti id laboriosam quia illum dolorem recusandae sit
                laudantium debitis aspernatur assumenda dolore voluptas deleniti
                optio porro deserunt, autem, minus ut!
              </Text>
            </CSSTransition>
          </TransitionGroup>
        </Description>

        <TransitionGroup>
          <CSSTransition key={id} timeout={1000} classNames="button">
            <Link to={`/detail/${productId}`}>
              <Button type="secondary" className="mt-2 laptop:mt-5">
                <ButtonText>order now</ButtonText>
              </Button>
            </Link>
          </CSSTransition>
        </TransitionGroup>
      </Info>

      <ImgWrapper>
        <TransitionGroup>
          <CSSTransition key={id} timeout={2000} classNames="image">
            <Img src={imgUrl} alt={title} />
          </CSSTransition>
        </TransitionGroup>
      </ImgWrapper>
    </Container>
  );
};

SliderItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
};

export default SliderItem;
