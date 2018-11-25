import React from "react";
import "./styles.css";

const Card = props => {
  const personAttributes = props => {
    return [
      `Name: ${props.name}`,
      `Species: ${props.species.name}`,
      `Homeworld: ${props.homeworld.name}`,
      `Population: ${props.homeworld.population}`
    ];
  };

  const planetAttributes = props => {
    return [
      `Name: ${props.name}`,
      `Terrain: ${props.terrain}`,
      `Population: ${props.population}`,
      `Climate: ${props.climate}`,
      `Residents: ${props.residents.join(", ")}`
    ];
  };

  const vehicleAttributes = props => {
    return [
      `Name: ${props.name}`,
      `Model: ${props.model}`,
      `Class: ${props.vehicle_class}`,
      `Passengers: ${props.passengers}`
    ];
  };

  const cardAttributes = attributes => {
    return attributes.map((attribute, index) => {
      return (
        <div className="item-attr" key={index}>
          {attribute}
        </div>
      );
    });
  };

  return (
    <div className="card">
      <div
        className={props.evaluateClass(props)}
        onClick={() => props.favButtonClick(props)}
      >
        Favorite
      </div>
      <div className="bottom-card">
        {props.cardType === "people" && cardAttributes(personAttributes(props))}
        {props.cardType === "planets" &&
          cardAttributes(planetAttributes(props))}
        {props.cardType === "vehicles" &&
          cardAttributes(vehicleAttributes(props))}
      </div>
    </div>
  );
};

export default Card;
