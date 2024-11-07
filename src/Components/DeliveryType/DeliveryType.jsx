import React from "react";
import "./DeliveryType.css";
const DeliveryType = (props) => {
  return (
    <div className="delivery-method">
      <div className="delivery-type">
        <img src={props.image} alt="" />
        <h5 className="type">{props.type}</h5>
        <h5 className="name">{props.name}</h5>
        <h3 className="price">${props.price}</h3>
        <p className="description">{props.description}</p>
        <hr />
        <h4 className="time">{props.time}</h4>
        <button>{props.button}</button>
      </div>
    </div>
  );
};

export default DeliveryType;
