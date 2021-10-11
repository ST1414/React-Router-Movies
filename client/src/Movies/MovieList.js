import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function MovieList(props) {
  console.log('MOVIE LIST: ', props);

  return (
    <div className="movie-list">

      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}

    </div>
  );
}

function MovieDetails(props) {
  const { id, title, director, metascore } = props.movie;

  // Add id above, add history below, add onClick in the Div
  const history = useHistory();

  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
      {/* <div className="movie-card" onClick={() => history.push(`/movies/${id}`)}> */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>

  );
}
