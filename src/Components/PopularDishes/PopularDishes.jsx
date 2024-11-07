import React, { useEffect, useState } from "react";
import "./PopularDishes.css";
// import data_food from "../Assets/data";
import FoodItem from "../FoodItems/FoodItem";
const PopularDishes = () => {
  const [dishes, setDishes] = useState([]);
  const URL = "http://localhost:5000/api/products";

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(URL);
        setDishes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDishes();
  }, []);
  return (
    <div className="popular-dishes">
      <h1>Popular Dishes</h1>
      <div className="popular-dish">
        {dishes.map((item) => {
          return (
            <FoodItem
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
      <button className="all-button">All dishes</button>
    </div>
  );
};

export default PopularDishes;
