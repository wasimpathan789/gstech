import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/aboutUs/AboutUs";

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default Aboutpage;
