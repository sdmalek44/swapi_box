import React from "react";
import "./styles.css";
import Card from "../Card";

const ResultsContainer = ({
  vehicles,
  planets,
  people,
  favorites,
  cardType,
  favButtonClick,
  evaluateClass
}) => {
  const peopleCards = people.map((person, index) => {
    return (
      <Card
        {...person}
        favButtonClick={favButtonClick}
        evaluateClass={evaluateClass}
        cardType={cardType}
        key={index}
        id={index}
      />
    );
  });

  const planetCards = planets.map((planet, index) => {
    return (
      <Card
        {...planet}
        cardType={cardType}
        evaluateClass={evaluateClass}
        key={index}
        id={index}
        favButtonClick={favButtonClick}
      />
    );
  });

  const vehicleCards = vehicles.map((vehicle, index) => {
    return (
      <Card
        {...vehicle}
        cardType={cardType}
        evaluateClass={evaluateClass}
        key={index}
        id={index}
        favButtonClick={favButtonClick}
      />
    );
  });

  const favoriteCards = favorites.map((favorite, index) => {
    return (
      <Card
        {...favorite}
        cardType={favorite.cardType}
        evaluateClass={evaluateClass}
        key={index}
        id={index}
        favButtonClick={favButtonClick}
      />
    );
  });

  return (
    <div className="results-box">
      {cardType === "people" && peopleCards}
      {cardType === "planets" && planetCards}
      {cardType === "vehicles" && vehicleCards}
      {cardType === "favorites" && favoriteCards}
    </div>
  );
};

export default ResultsContainer;
