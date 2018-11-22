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
    planets: [],
    vehicles: [],
    favorites: [],
    numOfFavs: 0
  };

  handleButtonClick = async event => {
    let url = `https://swapi.co/api/${event.target.id}/`;
    if (event.target.id === "people") {
      this.getPeopleData(url);
    } else if (event.target.id === "planets") {
      this.getPlanetsData(url);
    } else if (event.target.id === "vehicles") {
      this.getVehiclesData(url);
    }
    this.setState({ cardType: event.target.id });
  };

  getVehiclesData = async url => {
    if (this.state.vehicles.length > 0) return;
    try {
      this.setState({ isLoading: true });
      const response = await fetch(url);
      const data = await response.json();
      const vehicles = data.results;
      this.setState({ vehicles });
      await this.setState({ isLoading: true });
    } catch (error) {
      throw new Error(error.message);
    }
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
    return Promise.all(
      data.results.map(async planet => {
        try {
          this.setState({ isLoading: true });
          const residents = await this.residentsExpand(planet.residents);
          planet.residents = residents;
          return planet;
        } catch (error) {
          throw new Error(error.message);
        }
      })
    );
  };

  residentsExpand = residentsData => {
    return Promise.all(
      residentsData.map(async url => {
        try {
          const data = await fetch(url);
          const resident = await data.json();
          return resident.name;
        } catch (error) {
          throw new Error(error.message);
        }
      })
    );
  };

  peopleExpand = async data => {
    return Promise.all(
      data.results.map(async person => {
        try {
          const speciesData = await fetch(person.species);
          person.species = await speciesData.json();
          const homeworldData = await fetch(person.homeworld);
          person.homeworld = await homeworldData.json();
          return person;
        } catch (error) {
          throw new Error(error.message);
        }
      })
    );
  };

  favButtonClick = async props => {
    this.state.favorites.push(props);
    const favorites = this.state.favorites;
    const numOfFavs = favorites.length;
    this.setState({ favorites });
    this.setState({ numOfFavs });
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
          <Header numOfFavs={this.state.numOfFavs} />
          <Buttons handleButtonClick={this.handleButtonClick} />
          <ResultsContainer
            people={this.state.people}
            planets={this.state.planets}
            vehicles={this.state.vehicles}
            cardType={this.state.cardType}
            favButtonClick={this.favButtonClick}
          />
        </section>
      </div>
    );
  }
}

export default App;
