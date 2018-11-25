import React from "react";
import "./styles.css";

const Header = ({ numOfFavs, handleButtonClick }) => {
  return (
    <header className="head">
      <span className="title">SWAPI-Box</span>
      <div
        id="favorites"
        className="favorites-number"
        onClick={event => handleButtonClick(event)}
      >
        Favorites: {numOfFavs}
      </div>
    </header>
  );
};

export default Header;
