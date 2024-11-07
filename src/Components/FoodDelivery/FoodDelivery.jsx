import React from "react";
import "./FoodDelivery.css";
import pizza from "../Assets/Dish.png";
import soup from "../Assets/Dish 3.png";
import dessert from "../Assets/Dish 5.png";
import delivery_data from "../Assets/delivery_data";
import DeliveryType from "../DeliveryType/DeliveryType";

const FoodType = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <h4 className="food-name">{props.type}</h4>
    </div>
  );
};

const FoodDelivery = () => {
  return (
    <div className="food-delivery">
      <div className="delivery-and-food">
        <div className="text">
          <h1>Food Delivery</h1>
          <h4>Choose a delivery method</h4>
        </div>
        <div className="food-types">
          <div className="pizza type">
            <FoodType image={pizza} type="Pizza" />
          </div>
          <div className="soup type">
            <FoodType image={soup} type="Soup" />
          </div>
          <div className="dessert type">
            <FoodType image={dessert} type="Dessert" />
          </div>
        </div>
      </div>
      <div className="delivery-types">
        {delivery_data.map((type) => {
          return (
            <DeliveryType
              key={type.type}
              type={type.type}
              price={type.price}
              description={type.description}
              time={type.time}
              button={"Quick Order"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDelivery;
