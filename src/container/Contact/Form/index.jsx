import React from "react";
import { Button, Container } from "./styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "components/Input";
import Textarea from "components/Textarea";
import { toast } from "react-toastify";

const validation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  title: Yup.string().required("Title is required"),
  content: Yup.string()
    .max(300, "Must be 300 characters or less")
    .required("Content is required"),
});

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    title: "",
    content: "",
  };
  const handleSubmit = (_, { resetForm }) => {
    toast.success("Contact success!");
    resetForm();
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input label="Name" type="text" name="name" placeholder="Name" />
          <Input label="Email" type="text" name="email" placeholder="Email" />
          <Input label="Title" type="text" name="title" placeholder="Title" />
          <Textarea label="Content" name="content" placeholder="Content" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Contact;
