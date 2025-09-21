import React from "react";
import Rating from "./Rating";
// import "./Card.css";

interface CardProps {
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  isHot?: boolean;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  oldPrice,
  discount,
  image,
  rating,
  isHot = false,
  bgColor,
}) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      {isHot && <span className="badge">HOT</span>}
      <img src={image} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
      <Rating value={rating} />
      <div className="card-prices">
        <span className="new-price">${price}</span>
        {oldPrice && <span className="old-price">${oldPrice}</span>}
        {discount && <span className="discount">{discount}% Off</span>}
      </div>
    </div>
  );
};

export default Card;
