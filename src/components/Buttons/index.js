import React, { Component } from "react";
import "./styles.css";

class Buttons extends Component {
  const { handleButtonClick } = this.props
  render() {
    return (
      <div className="button-box">
        <div className="search-button" id="people" onClick={(event) => {handlePeopleClick(event)}}>
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
  }
}

export default Buttons;
