import React, { useState } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import iTImage from "../../assets/images/it1.jpg";

const ServiceCard1 = ({
  title,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  description10,
  one,
  two,

  status,
}) => {
  return (
    <div className="itConsulting">
      <div className="itCotainerLeft">
        {/* titl  */}
        <h1 data-aos="fade-right" data-aos-duration="1000">
          {title}
        </h1>
        <h5 data-aos="fade-right" data-aos-duration="1000">
          {description1}
        </h5>

        <div className="itContainerContent">
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ width: "18px" }}
            >
              {one ? (
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              ) : null}
            </div>
            <p data-aos="fade-right" data-aos-duration="1000">
              {description2}
            </p>
          </div>
          <div className="itParagraphContent">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ width: "18px" }}
            >
              <LuArrowBigRightDash
                style={{
                  fontSize: "20px",
                  color: "#081158",
                  marginTop: "10px",
                }}
              />
            </div>

            <p data-aos="fade-right" data-aos-duration="1000">
              {description3}
            </p>
          </div>
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ width: "18px" }}
            >
              <LuArrowBigRightDash
                style={{
                  fontSize: "20px",
                  color: "#081158",
                  marginTop: "10px",
                }}
              />
            </div>
            <p data-aos="fade-right" data-aos-duration="1000">
              {description4}
            </p>
          </div>
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ width: "18px" }}
            >
              {status ? (
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              ) : null}
            </div>
            <p data-aos="fade-right" data-aos-duration="1000">
              {description5}
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="itCotainerRight"
      >
        <img
          src={iTImage}
          alt=""
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <div className="bgImage"></div>
      </div>
    </div>
  );
};

export default ServiceCard1;
