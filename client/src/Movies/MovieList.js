import React from 'react';

export default function MovieList(props) {
  console.log('MOVIE LIST: ', props);
  
  // if (!item) return <h2>Oh no not found!!</h2>


  return (
    <div className="movie-list">

      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}

    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
