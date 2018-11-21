import React from "react";
import "./styles.css";
import Card from "../Card";

const ResultsContainer = ({ people, cardType }) => {
  const peopleCards = people.map((person, index) => {
    return <Card {...person} cardType={cardType} />;
  });

  return (
    <div className="results-box">{cardType === "people" && peopleCards}</div>
  );
};

export default ResultsContainer;
