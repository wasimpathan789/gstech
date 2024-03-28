import React from "react";

const ServiceImageContainer = ({ image, animation }) => {
  return (
    <div className="itCotainerRight itCotainerRight2">
      <img data-aos={animation} data-aos-duration="1000" src={image} alt="" />
      <div
        data-aos={animation}
        data-aos-duration="1000"
        className="bgImage bgImage2 "
      ></div>
    </div>
  );
};

export default ServiceImageContainer;
