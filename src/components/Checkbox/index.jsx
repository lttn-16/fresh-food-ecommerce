import PropTypes from "prop-types";
import React, { useState } from "react";
import { Input, Label, Wrapper } from "./styles";

const CheckBox = ({ initialCheck, onChange, label }) => {
  const [id] = useState(randomId());

  const handleChange = () => {
    onChange && onChange(!initialCheck);
  };

  return (
    <Wrapper>
      <Input
        type="checkbox"
        checked={initialCheck}
        onChange={handleChange}
        id={id}
      />
      <Label>{label}</Label>
    </Wrapper>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  initialCheck: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;

const randomId = (isPassword = false) => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  if (!isPassword) return `${s4()}${s4()}-${s4()}`;
  return `${s4()}${s4()}-${s4()}${s4()}-${s4()}${s4()}-${s4()}${s4()}-`;
};
