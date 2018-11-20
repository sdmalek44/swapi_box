import React from "react";
import "./styles.css";

const Buttons = ({ handlePeopleClick }) => {
  return (
    <div className="button-box">
      <div
        className="search-button"
        id="people"
        onClick={event => {
          handlePeopleClick(event);
        }}
      >
        People
      </div>
      <div className="search-button" id="planets">
        Planets
      </div>
      <div className="search-button" id="vehicles">
        Vehicles
      </div>
    </div>
  );
};

export default Buttons;
