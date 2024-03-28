import "../../pages/servicepage/ITConsulting.css";
import { LuArrowBigRightDash } from "react-icons/lu";

const ParagraphContainer2 = ({ text, animation }) => {
  return (
    <div className="itContainerContent itContainerContent2">
      <div>
        <div
          data-aos={animation}
          data-aos-duration="1000"
          style={{ width: "18px" }}
        >
          <LuArrowBigRightDash
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "10px",
            }}
          />
        </div>
        <p data-aos={animation} data-aos-duration="1000">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ParagraphContainer2;
