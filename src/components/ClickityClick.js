// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {
    // if no props need to be passed into the constructor(), then the bottom syntax 
    // will work for setting the state.
    
    // state = {
    //     hasBeenClicked: false 
    // }

    // Otherwise use a consttructor syntax

    constructor() {
        super() 
        this.state = {
            hasBeenClicked: false 
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                hasBeenClicked: !prevState.hasBeenClicked
            }
        })
    }
    
    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}