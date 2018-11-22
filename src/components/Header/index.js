import React from "react";
import "./styles.css";

const Header = ({ numOfFavs }) => {
  return (
    <header className="head">
      <span className="title">SWAPI-Box</span>
      <div className="favorites-number">Favorites: {numOfFavs}</div>
    </header>
  );
};

export default Header;
