import React from "react";
import "./styles.css";

const MovieText = ({ movie }) => {
  return (
    <section className="movie-text">
      <div>{movie.opening_crawl}</div>
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
    </section>
  );
};

export default MovieText;
