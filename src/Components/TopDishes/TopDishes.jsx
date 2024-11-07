import React from "react";
import "./TopDishes.css";
import top_dishes from "../Assets/top_dishes";
import DeliveryType from "../DeliveryType/DeliveryType";
const TopDishes = () => {
  return (
    <div className="top-d">
      <h1>Top Dishes</h1>
      <div className="top-dishes">
        <div className="dish">
          {top_dishes.map((dish) => {
            return (
              <DeliveryType
                key={dish.name}
                image={dish.image}
                name={dish.name}
                price={dish.price}
                button="Add To Cart"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TopDishes;
