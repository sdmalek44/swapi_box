import React from "react";

const Card = props => {
  let attributes = [];
  if (props.cardType === "people") {
    attributes = [
      `Name: ${props.name}`,
      `Species: ${props.species.name}`,
      `Homeworld: ${props.homeworld.name}`,
      `Population: ${props.homeworld.population}`
    ];
  } else if (props.cardType === "planets") {
    attributes = [
      `Name: ${props.name}`,
      `Terrain: ${props.terrain}`,
      `Population: ${props.population}`,
      `Climate: ${props.climate}`,
      `Residents: ${props.residents.join(", ")}`
    ];
  } else if (props.cardType === "vehicles") {
    attributes = [
      `Name: ${props.name}`,
      `Model: ${props.model}`,
      `Class: ${props.vehicle_class}`,
      `Passengers: ${props.passengers}`
    ];
  }

  const cardAttributes = attributes.map((attribute, index) => {
    return (
      <div className="item-attr" key={index}>
        {attribute}
      </div>
    );
  });

  return <div className="card">{cardAttributes}</div>;
};

export default Card;
