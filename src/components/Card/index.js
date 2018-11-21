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
  }
  const attributes = item.map((attr, i) => {
    return <div className="item-attr">{attr}</div>;
  });

  return <div className="card">{attributes}</div>;
};

export default Card;
