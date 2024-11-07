import React from "react";
import "./FoodItem.css";
const FoodItem = ({ image, name, price }) => {
  return (
    <div className="food-item">
      <img src={image} alt="" />
      <h3 className="food-name">{name}</h3>
      <h3 className="food-price">${price}</h3>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default FoodItem;
