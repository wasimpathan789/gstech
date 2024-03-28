import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SubParagraphContainer = ({ text, animation }) => {
  return (
    <span
      data-aos={animation}
      data-aos-duration="1000"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "8px",
      }}
    >
      <MdKeyboardDoubleArrowRight
        style={{
          fontSize: "25px",
          // marginTop: "15px",
          color: "red",
          marginTop: "2px",
        }}
      />
      <span>{text}</span>
    </span>
  );
};

export default SubParagraphContainer;
