import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="head">
      <span className="title">SWAPI-Box</span>
      <button className="favorites-number">Favorites: 0</button>
    </header>
  );
};

export default Header;
