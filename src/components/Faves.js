import React, { Component } from 'react'

class Faves extends Component {

    state = {
        isFave: false
    }

    handleClick = (e)  => {

        e.stopPropagation()
        // console.log("handling Fave click!")
        this.setState((prevState) => {
            return {
                isFave: !prevState.isFave
            }
        })
    }
    render () {
        return (
            <div 
                className={`film-row-fave ${this.state.isFave === false ? 'remove_from_queue' : 'add_to_queue'}`}
                onClick={this.handleClick}
                >
                    <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Faves