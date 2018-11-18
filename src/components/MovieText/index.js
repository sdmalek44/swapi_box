import React from "react";

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
