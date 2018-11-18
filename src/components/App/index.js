import React, { Component } from "react";
import "./styles.css";
import MovieText from "../MovieText";

class App extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    this.getMovieData();
  }

  randomFilmUrl = () => {
    let film = Math.floor(Math.random() * 7) + 1;
    return `https://swapi.co/api/films/${film}/`;
  };

  getMovieData = async () => {
    try {
      const response = await fetch(this.randomFilmUrl());
      const movie = await response.json();
      this.setState({ movie });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  render() {
    return (
      <div className="app">
        <aside className="movie-scroll">
          <MovieText movie={this.state.movie} />
        </aside>
        <section className="main">
          <header className="head">
            <span className="title">SWAPI-Box</span>
            <button className="favorites-number">Favorites: 0</button>
          </header>
          <article className="results-box" />
        </section>
      </div>
    );
  }
}

export default App;
