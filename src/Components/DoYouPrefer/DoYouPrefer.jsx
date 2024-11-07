import React from "react";
import "./DoYouPrefer.css";
import chef0 from "../Assets/Chef0.png";
const DoYouPrefer = () => {
  return (
    <div className="do-you-prefer">
      <div className="prefer-image-text">
        <div className="prefer-image">
          <img src={chef0} alt="" />
        </div>
        <div className="prefer-text">
          <h1>
            Do You Prefer <span>Our Food?</span>
          </h1>
          <h5>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dolorem adipisci recusandae similique. Dignissimos eum totam quia,
            atque necessitatibus dolorum labore dicta vel culpa ea ratione
            consequatur magnam pariatur saepe."
          </h5>
          <h3>MARK WILLOW</h3>
          <div className="buttons">
            <button className="video">Watch Video</button>
            <button className="contact">Contact Us &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYouPrefer;
