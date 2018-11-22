import React, { Component } from "react";
import "./styles.css";
import MovieText from "../MovieText";
import Header from "../Header";
import Buttons from "../Buttons";
import ResultsContainer from "../ResultsContainer";

class App extends Component {
  state = {
    isLoading: false,
    movie: {},
    cardType: "main",
    people: [],
    planets: []
  };

  handleButtonClick = async event => {
    let url = `https://swapi.co/api/${event.target.id}/`;
    if (event.target.id === "people") {
      this.getPeopleData(url);
    } else if (event.target.id === "planets") {
      this.getPlanetsData(url);
    }
    this.setState({ cardType: event.target.id });
  };

  getPlanetsData = async url => {
    if (this.state.planets.length > 0) return;
    try {
      this.setState({ isLoading: true });
      const response = await fetch(url);
      const data = await response.json();
      const planets = await this.planetsExpand(data);
      this.setState({ planets });
      await this.setState({ isLoading: false });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getPeopleData = async url => {
    if (this.state.people.length > 0) return;
    try {
      this.setState({ isLoading: true });
      const response = await fetch(url);
      const data = await response.json();
      const people = await this.peopleExpand(data);
      this.setState({ people });
      await this.setState({ isLoading: false });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  planetsExpand = async data => {
    const planetsData = data.results.map(async planet => {
      try {
        this.setState({ isLoading: true });
        const residents = this.residentsExpand(planet.residents);
        planet.residents = residents;
        return planet;
      } catch (error) {
        throw new Error(error.message);
      }
    });
    return Promise.all(planetsData);
  };

  residentsExpand = residentsData => {
    const residents = residentsData.map(async url => {
      try {
        const data = await fetch(url);
        const resident = await data.json();
        return resident.name;
      } catch (error) {
        throw new Error(error.message);
      }
    });
    return Promise.all(residents);
  };

  peopleExpand = async data => {
    const peopleData = data.results.map(async person => {
      try {
        const speciesData = await fetch(person.species);
        const species = await speciesData.json();
        const homeworldData = await fetch(person.homeworld);
        const homeworld = await homeworldData.json();
        person.species = species;
        person.homeworld = homeworld;

        return person;
      } catch (error) {
        throw new Error(error.message);
      }
    });
    return Promise.all(peopleData);
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
          <Header />
          <Buttons handleButtonClick={this.handleButtonClick} />
          <ResultsContainer
            people={this.state.people}
            planets={this.state.planets}
            cardType={this.state.cardType}
          />
        </section>
      </div>
    );
  }
}

export default App;
