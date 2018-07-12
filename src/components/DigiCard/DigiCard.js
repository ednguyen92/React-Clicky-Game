import React from "react";
import "./DigiCard.css"

const DigiCard = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClicked(props.id)}
  >
    <img src={props.image} />
  </div>
);

export default DigiCard;