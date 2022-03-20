import { useField } from "formik";
import React from "react";
import { Container, Error, Textarea, Label } from "./styles";

const TextareaCustom = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Textarea {...field} {...props} rows="8" error={meta.error} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </Container>
  );
};

export default TextareaCustom;
