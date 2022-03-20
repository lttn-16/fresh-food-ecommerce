import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Contact from "pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
