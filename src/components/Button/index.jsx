import React from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

const Button = (props) => {
  const handleClick = () => {
    props.onClick && props.onClick();
  };

  return (
    <Container
      className={props.className}
      type={props.type}
      onClick={handleClick}
    >
      {props.children}
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
