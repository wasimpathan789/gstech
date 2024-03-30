import "./HomeCard.css";
const HomeCard = ({ title, description }) => {
  return (
    <div className="homeCard">
      <div className="homeCardTop">
        <h1>{title}</h1>
      </div>

      <div className="hDescription">
        <p>{description}</p>
      </div>

      <div className="homeCartBottom">
        <h1>Read More</h1>
      </div>
    </div>
  );
};

export default HomeCard;
