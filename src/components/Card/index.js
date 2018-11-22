import React from "react";

const Card = props => {
  let item = [];
  if (props.cardType === "people") {
    item = [
      `Name: ${props.name}`,
      `Species: ${props.species.name}`,
      `Homeworld: ${props.homeworld.name}`,
      `Population: ${props.homeworld.population}`
    ];
  } else if (props.cardType === "planets") {
    item = [
      `Name: ${props.name}`,
      `Terrain: ${props.terrain}`,
      `Population: ${props.population}`,
      `Climate: ${props.climate}`,
      `Residents: ${props.residents.join(", ")}`
    ];
  } else if (props.cardType === "vehicles") {
    item = [
      `Name: ${props.name}`,
      `Model: ${props.model}`,
      `Class: ${props.vehicle_class}`,
      `Passengers: ${props.passengers}`
    ];
  }

  const attributes = item.map((attr, i) => {
    return <div className="item-attr">{attr}</div>;
  });

  return <div className="card">{attributes}</div>;
};

export default Card;
