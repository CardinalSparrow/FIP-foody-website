import React from "react";
import "./Menu.css";
import Meat_Dream from "../Assets/Dish.png";
import FoodItem from "../FoodItems/FoodItem";

const Menu = () => {
  return (
    <div className="menu section">
      <h1>Popular Dishes</h1>
      <FoodItem image={Meat_Dream} name="cheese" price="21.99" />
    </div>
  );
};

export default Menu;
