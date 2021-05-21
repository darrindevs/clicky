import React from "react";
import "./style.css";


function Card(props) {
  return (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <img className="card-image" alt={props.name} src={props.image} />
    </div>
  );
}

export default Card;
