import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import an icon from react-icons

const ReusableCard = ({
  heading,
  buttonText,
  icon = <FaArrowRight />,
  imageUrl,
  cardBg = "#f8f9fa", // Default background color for card
  headingBg = "#17a2b8", // Default background color for heading
}) => {
  return (
    <div className="card-container" style={{ backgroundColor: cardBg }}>
      <div className="card-left">
        <div className="card-heading" style={{ backgroundColor: headingBg }}>
          <h3>{heading}</h3>
        </div>
        <button className="card-button">
          {icon} {buttonText}
        </button>
      </div>
      <div className="card-right">
        <img src={imageUrl} alt="Card Visual" className="card-image" />
      </div>
    </div>
  );
};

export default ReusableCard;
