import "./Testomonial.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { BsQuote } from "react-icons/bs";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
const Testomonial = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <h1 style={{ color: "red", zIndex: "1212" }}>sdfasfd</h1>

        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            Honoured to be with an excellent team and a respectful professional
            environment
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>1</p>
            </div>
            <div className="clientName">
              <h1>Sikkanter</h1>
              <h2>Aqualia</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            A reliable IT solutions company. They provided us consultancy on
            best industry practices also the services as promised.
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>2</p>
            </div>
            <div className="clientName">
              <h1>Mansoor</h1>
              <h2>NWC</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            Well established organisation with a high quality IT solutions
            including infrastructure and cutting edge software solutions. Highly
            recommended..
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>3</p>
            </div>
            <div className="clientName">
              <h1>Miro</h1>
              <h2>Rislo</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            Honoured to be with an excellent team and a respectful professional
            environment
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>4</p>
            </div>
            <div className="clientName">
              <h1>Sikkanter</h1>
              <h2>Aqualia</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            A reliable IT solutions company. They provided us consultancy on
            best industry practices also the services as promised.
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>5</p>
            </div>
            <div className="clientName">
              <h1>Mansoor</h1>
              <h2>NWC</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            Well established organisation with a high quality IT solutions
            including infrastructure and cutting edge software solutions. Highly
            recommended..
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>6</p>
            </div>
            <div className="clientName">
              <h1>Miro</h1>
              <h2>Rislo</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            Honoured to be with an excellent team and a respectful professional
            environment
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>7</p>
            </div>
            <div className="clientName">
              <h1>Sikkanter</h1>
              <h2>Aqualia</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            A reliable IT solutions company. They provided us consultancy on
            best industry practices also the services as promised.
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>8</p>
            </div>
            <div className="clientName">
              <h1>Mansoor</h1>
              <h2>NWC</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <div className="tIconContainer">
            <BsQuote color="#ffc857" fontSize={"4rem"} />
          </div>

          <h3>
            Well established organisation with a high quality IT solutions
            including infrastructure and cutting edge software solutions. Highly
            recommended..
          </h3>
          <div className="clientDetails">
            <div className="clientImage">
              <p>9</p>
            </div>
            <div className="clientName">
              <h1>Miro</h1>
              <h2>Rislo</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testomonial;
