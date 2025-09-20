import React from "react";

interface RatingProps {
  value: number; // e.g. 4 means 4 stars
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, i) => (
        <span key={i} className={i < value ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
