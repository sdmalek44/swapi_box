import React from "react";
import "./styles.css";
import Card from "../Card";

const ResultsContainer = ({
  vehicles,
  planets,
  people,
  favorites,
  cardType,
  favButtonClick
}) => {
  const peopleCards = people.map((person, index) => {
    return (
      <Card
        {...person}
        favButtonClick={favButtonClick}
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
