import Aos from "aos";
import "aos/dist/aos.css";
import Helmet from "components/Helmet";
import About from "container/Home/About";
import Food from "container/Home/Food";
import Slider from "container/Home/Slider";
import Testimonial from "container/Home/Testimonial";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 150,
      easing: "linear",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <Helmet title="Trang chủ">
      <Slider />
      <About />
      <Food />
      <Testimonial />
    </Helmet>
  );
};

export default Home;
