import React, { Component } from 'react';
import FilmPoster from './PosterUrl';
import Faves from './Faves'

class FilmRow extends Component {
  handleDetailsClick = (film)  => {
    console.log(`printing details for ${film}`)
}
  render() {
    const poster = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path
    return (
        <div 
            className="film-row"
            onClick={ () => {this.handleDetailsClick(this.props.film.title)}}
            >
        <FilmPoster 
            url={poster}
            title={this.props.film.title}
            />

        <div className='film-summary'>
        <h1>{this.props.film.title}</h1>
        <p>{this.props.film.release_date.split('', 4)}</p>
        </div>
        <Faves />
      </div>
    );
  }
}

export default FilmRow; 