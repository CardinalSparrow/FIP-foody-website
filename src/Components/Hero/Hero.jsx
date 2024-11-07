import React from "react";
import "./Hero.css";
import hero from "../Assets/logo.png";
import hero_small from "../Assets/logo.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text-image">
        <div className="hero-text">
          <h1>
            <span>The Best</span> Choice You <span>Can Have</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            veniam voluptatibus accusamus fugiat tempore obcaecati soluta in,
            totam recusandae porro. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptate, itaque?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores, molestiae!
          </p>
          <button className="button">Quick Order</button>
        </div>
        <div className="hero-image">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="hero-small flex">
        <img src={hero_small} alt="" />
        <img src={hero_small} alt="" />
        <img src={hero_small} alt="" />
      </div>
    </div>
  );
};

export default Hero;
