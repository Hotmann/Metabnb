import React, { useState } from "react";

import Location from "../location/location";
import LOCATION_CARD from "./locations.data";

import "./locations.css";

const Locations = (props) => {
  const [cards] = useState(LOCATION_CARD);
  return (
    <div className="list">
      {cards.map(({ id, imageUrl, ...otherProps }) => (
        <div>
          <Location key={id} image={imageUrl} {...otherProps} />
        </div>
      ))}
    </div>
  );
};
export default Locations;
