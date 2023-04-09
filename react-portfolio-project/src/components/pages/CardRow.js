// CardRow.js
import React from "react";

function CardRow(props) {
  return (
    <div className="row">
      {props.cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardRow;
