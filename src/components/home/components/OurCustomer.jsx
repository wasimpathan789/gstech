import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./OurCustomer.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const OurCustomer = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  width,
  height,
  swiperHeight,
  bg,
}) => {
  const swiperObject = {
    slidesPerView: 1,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <Swiper
        style={{ height: `${swiperHeight}` }}
        spaceBetween={30}
        pagination={true}
        // navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          180: {
            slidesPerView: 1,
          },
          580: {
            slidesPerView: 2,
          },
          780: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{
              width: `${width}`,
              height: `${height}`,
              borderColor: "red",
              borderWidth: "1px",
            }}
            src={image1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{ width: `${width}`, height: `${height}` }}
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{ width: `${width}`, height: `${height}` }}
            src={image3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{ width: `${width}`, height: `${height}` }}
            src={image4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{ width: `${width}`, height: `${height}` }}
            src={image5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{ width: `${width}`, height: `${height}` }}
            src={image6}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: `${bg}` }}
          className="mySwiperSlide"
        >
          <img
            style={{ width: `${width}`, height: `${height}` }}
            src={image7}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OurCustomer;
