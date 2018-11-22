import React from "react";
import "./styles.css";
import Card from "../Card";

const ResultsContainer = ({ vehicles, planets, people, cardType }) => {
  const peopleCards = people.map((person, index) => {
    return <Card {...person} cardType={cardType} />;
  });

  const planetCards = planets.map((planet, index) => {
    return <Card {...planet} cardType={cardType} />;
  });

  const vehicleCards = vehicles.map((vehicle, index) => {
    return <Card {...vehicle} cardType={cardType} />;
  });

  return (
    <div className="results-box">
      {cardType === "people" && peopleCards}
      {cardType === "planets" && planetCards}
      {cardType === "vehicles" && vehicleCards}
    </div>
  );
};

export default ResultsContainer;
