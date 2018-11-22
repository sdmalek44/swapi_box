import React from "react";
import "./styles.css";

const Buttons = ({ handleButtonClick }) => {
  return (
    <div className="button-box">
      <div
        className="search-button"
        id="people"
        onClick={event => {
          handleButtonClick(event);
        }}
      >
        People
      </div>
      <div
        className="search-button"
        id="planets"
        onClick={event => {
          handleButtonClick(event);
        }}
      >
        Planets
      </div>
      <div className="search-button" id="vehicles">
        Vehicles
      </div>
    </div>
  );
};

export default Buttons;
