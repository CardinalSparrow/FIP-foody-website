import React from "react";
import "./About.css";
import chef_3 from "../Assets/chef3.png";
import chef_2 from "../Assets/chef2.png";
import chef from "../Assets/chef.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-text-image">
        <div className="about-images">
          <div className="small-img">
            <img src={chef_3} alt="" />
            <img src={chef_2} alt="" />
          </div>
          <img className="chef" src={chef} alt="" />
        </div>
        <div className="about-text">
          <h1>
            Your Foods Made with <span>Golden</span> hands
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            deserunt. Cumque accusantium aperiam nam debitis distinctio eveniet
            quidem nemo corrupti natus minima culpa rem architecto possimus
            explicabo facere voluptatibus, recusandae quas tenetur eos aliquid
            cum dolore, nihil voluptas. Ut alias quod sequi accusamus eos
            deserunt obcaecati qui veniam minima autem?
          </p>
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
