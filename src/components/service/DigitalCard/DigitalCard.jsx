import "./DigitalCard.css";
const DigitalCard = ({ image, text, animation1, animation2 }) => {
  return (
    <div className="digitalCard">
      <img data-aos={animation1} data-aos-duration="1000" src={image} alt="" />
      <div
        data-aos={animation2}
        data-aos-duration="1000"
        className="digitalCardText"
      >
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default DigitalCard;
