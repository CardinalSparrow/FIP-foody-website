import React from "react";
import "./Feedback.css";

const Customers = [
  {
    name: "Rhiana Miller",
    star: "⭐⭐⭐⭐⭐",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore, deserunt repellendus ea tenetur mollitia fuga distinctio laborum adipisci rem.",
  },
  {
    name: "Ade Emmanuel",
    star: "⭐⭐⭐⭐⭐",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore, deserunt repellendus ea tenetur mollitia fuga distinctio laborum adipisci rem.",
  },
  {
    name: "Eze Bawa",
    star: "⭐⭐⭐⭐⭐",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore, deserunt repellendus ea tenetur mollitia fuga distinctio laborum adipisci rem.",
  },
];

const CustomerFeedback = (props) => {
  return (
    <div className="customer">
      <div className="name-star">
        <h4>{props.name}</h4>
        <h4 className="star">{props.star}</h4>
      </div>
      <p>{props.comment}</p>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="feedback">
      <h1>
        Feedback From <br />
        <span>Our Customers</span>
      </h1>
      <div className="customer-feedback">
        {Customers.map((customer) => {
          return (
            <CustomerFeedback
              key={customer.name}
              name={customer.name}
              star={customer.star}
              comment={customer.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
