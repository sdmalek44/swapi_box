import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="head">
      <span className="title">SWAPI-Box</span>
      <div className="favorites-number">Favorites: 0</div>
    </header>
  );
};

export default Header;
