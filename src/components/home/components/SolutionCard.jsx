import React from "react";

const SolutionCard = ({ title, description }) => {
  return (
    <div className="solutionCard">
      <div className="solutionCardTop">
        <h1>{title}</h1>
      </div>

      <div className="SolutionCardDescription">
        <p>{description}</p>
      </div>

      <div className="solutionCardBottom">
        <h1>Read More</h1>
      </div>
    </div>
  );
};

export default SolutionCard;
