import React from "react";
import CardRow from "./CardRow";

export default function Portfolio() {
  const cardData = [
    {
      title: "Car Inventory Manager",
      description: "First full stack application",
      url: "https://sleepy-ridge-65976.herokuapp.com/",
      img: "/images/car-inv.png",
    },
    {
      title: "What to Watch",
      description: "Web application which displays pospular movies by genre",
      url: "https://e73707.github.io/Movie-search-engine/",
      img: "/images/w2w.png",
    },
    {
      title: "Express Note Taker",
      description: "Note taking application",
      url: "https://glacial-depths-61663.herokuapp.com/",
      img: "/images/note-taker.png",
    },
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
