import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  return (
    <ToastContainer
      theme="colored"
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  );
};

export default Toastify;
