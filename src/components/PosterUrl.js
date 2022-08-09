import React, { Component } from 'react'

class FilmPoster extends Component {
    render() {
        return (
            <img src={this.props.url} alt={this.props.title} />
        )
    }
}

export default FilmPoster