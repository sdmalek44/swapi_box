import React, { Component } from "react";
import "./styles.css";

class Buttons extends Component {
  render() {
    return (
      <div className="button-box">
        <div className="search-button" id="people">
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
