import React from "react";
import { useState } from "react";
import { FAQ_data } from "../Assets/FAQ_data";
import "./FAQ.css";
import faq from "../Assets/FAQ .png";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-card">
      <div className="question-header" onClick={() => setIsActive(!isActive)}>
        <h4 className="question">
          {question} {isActive && console.log("red")}
        </h4>
        <p className="icon">{isActive ? "-" : ">"}</p>
      </div>
      <div className="answer">
        {isActive && <p className="card-info">{answer}</p>}
      </div>
    </div>
  );
};
const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-text-and-image">
        <div className="faq-text">
          <h1>Frequently Asked Questions</h1>
          {FAQ_data.map(({ question, answer }) => {
            return (
              <Accordion key={question} question={question} answer={answer} />
            );
          })}
        </div>
        <div className="faq-image">
          <img src={faq} alt="" />
        </div>
      </div>
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter your email" />
          <p>&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
