import React, { useState } from "react";

import Card from "../card/card";
import IMAGE_CARD from "./cardlist.data";

import "./cardlist.css";

const CardList = (props) => {
  const [cards] = useState(IMAGE_CARD);
  return (
    <div className="section-2">
      <p className="title">Inspiration for your next adventure</p>
      <div className="card-list">
        {cards.map(({ id, imageUrl, ...otherProps }) => (
          <div>
            <Card key={id} image={imageUrl} {...otherProps} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardList;
