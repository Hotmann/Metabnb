import React from "react";

import { ReactComponent as Rating } from "../../assets/rating.svg";

import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt={props.title} src={props.image} className="image" />
      <div className="tags">
        <p>Desert king</p>
        <p className="emp">1MBT per night</p>
      </div>
      <div className="tags">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <Rating />
    </div>
  );
};

export default Card;
