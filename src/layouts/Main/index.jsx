import Modal from "components/Modal";
import ScrollToTop from "components/SrollToTop";
import Toastify from "components/Toastify";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import { Button, MainWrapper } from "./styles";

const Main = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Button onClick={handleClick}>
        <i class="bx bxs-to-top"></i>
      </Button>
      <MainWrapper>
        <Routes />
      </MainWrapper>
      <Footer />
      <Modal />
      <Toastify />
    </BrowserRouter>
  );
};

export default Main;
