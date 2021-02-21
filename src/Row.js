import React, { useEffect, useState } from "react";
import "./Row.css";
import data from "./data";

const Row = ({ title, isLargeRow, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    //Load Movie
    console.log("Running");
    fetch(`https://api.themoviedb.org/3${fetchUrl}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.results);
          setMovies(result.results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleClick = (movie) => {};

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick("movie")}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
