import React, { Component } from 'react';
import './App.css';
import FilmListing from './components/FilmList';
import FilmDetails from './components/Details';
import TMDB from '../../src/TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={TMDB.films} />
          <FilmDetails films={TMDB.films} />
        </div>
      </div>
    )
  }
}

export default App;