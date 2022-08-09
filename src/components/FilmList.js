import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state = {
    filter: "all"
}

handleFilterClick = (e, filter)  => {
    console.log("an filter was clicked" + {filter})
    this.setState({
        filter: e
    })
}
  render() {
    const filmList = this.props.films.map((film, index) =>{
      return (
        <FilmRow key={index} film={film} />
      )
    })
    return (
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
              <div 
                  className={
                      `film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} 
                      onClick={() => {this.handleFilterClick("all")}}
                  >
                  ALL
                  <span className="section-count">{this.props.films.length}</span>
              </div>
              <div 
                  className={
                      `film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
                      onClick={ () => this.handleFilterClick('faves')}
                  >
                      FAVES
                  <span className="section-count">0</span>
              </div>
          </div>

            {filmList}
          </div>
    )
    }
}

export default FilmListing;