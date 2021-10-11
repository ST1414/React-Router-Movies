import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';

// --- Add Imports
import { Link, Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log('API: ', response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      {console.log('RETURN: ', movieList)}
      <SavedList list={[ /* This is stretch */]} />
      
      <Route path='/'>
          <MovieList movies={movieList}/>
      </Route>
      
      <Route path={'/movies/:id'}>
          <Movie movies={movieList}/>
      </Route>
    </div>
  );
}
