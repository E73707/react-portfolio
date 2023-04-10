import React from "react";
import CardRow from "./CardRow";

export default function Portfolio() {
  const cardData = [
    { title: "Card 1", description: "This is card 1" },
    { title: "Card 2", description: "This is card 2" },
    { title: "Card 3", description: "This is card 3" },
  ];

  return (
    <div className="body">
      <h1>Portfolio</h1>
      <p>This is the portfolio area</p>
      <div className="project-container">
        <CardRow cards={cardData} />
      </div>
    </div>
  );
}
