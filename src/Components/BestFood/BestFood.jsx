import React from "react";
import "./BestFood.css";
import best_image from "../Assets/logo.png";
const BestFood = () => {
  return (
    <div className="best-food">
      <div className="best-text-image">
        <div className="best-text">
          <h1>
            The Best Food<span> In Town</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            veniam voluptatibus accusamus fugiat tempore obcaecati soluta in,
            totam recusandae porro. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptate, itaque?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores, molestiae!
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet Lorem, ipsum..</li>
            <li>Lorem ipsum dolor sit amet Lorem, ipsum..</li>
            <li>Lorem ipsum dolor sit amet Lorem, ipsum..</li>
            <li>Lorem ipsum dolor sit amet Lorem, ipsum..</li>
            <li>Lorem ipsum dolor sit amet Lorem, ipsum..</li>
          </ul>
          <button className="button">Contact Us</button>
        </div>
        <div className="best-image">
          <img src={best_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestFood;
