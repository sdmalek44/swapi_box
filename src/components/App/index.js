import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="movieScroll" />
        <section className="main">
          <header className="head">
            <span className="title">SWAPI-Box</span>
            <span className="favoritesNumber">Favorites: 0</span>
          </header>
          <article className="resultsBox" />
        </section>
      </div>
    );
  }
}

export default App;
