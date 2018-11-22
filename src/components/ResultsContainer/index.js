import React from "react";
import "./styles.css";
import Card from "../Card";

const ResultsContainer = ({ planets, people, cardType }) => {
  const peopleCards = people.map((person, index) => {
    return <Card {...person} cardType={cardType} />;
  });

  const planetCards = planets.map((planet, index) => {
    return <Card {...planet} cardType={cardType} />;
  });

  return (
    <div className="results-box">
      {cardType === "people" && peopleCards}
      {cardType === "planets" && planetCards}
    </div>
  );
};

export default ResultsContainer;
