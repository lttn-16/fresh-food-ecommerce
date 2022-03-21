import { useField } from "formik";
import React from "react";
import { Container, Error, Input, Label } from "./styles";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} error={meta.touched && meta.error} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </Container>
  );
};

export default CustomInput;
