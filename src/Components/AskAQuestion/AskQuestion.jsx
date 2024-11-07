import React from "react";
import "./AskQuestion.css";
import question_image from "../Assets/logo.png";

const AskQuestion = () => {
  return (
    <div className="ask-question">
      <div className="image-and-form">
        <img src={question_image} alt="" />

        <div className="form">
          <h1>Ask A Question</h1>
          <h4>Have any questions? Ask us directly</h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <br />
          <textarea id="" cols="45" rows="10" defaultValue="Message"></textarea>
          <br />
          <button>Send A Message</button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
