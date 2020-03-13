import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plyrScore: 0,
        }
    };

    AddOne = (press) => {
        console.log(`Player ${this.props.plyrNum}'s button is wired up.`);//Verify Method Call & Button Activation
        let newScore = parseInt(this.state.plyrScore)+ 1;
    }
    render() {
        return (
            <div>
                <label>Player {this.props.plyrNum}</label>
                <h4>Score: {this.state.plyrScore}</h4>
                <button onClick={this.AddOne}>Press</button>
            </div>
        )
    };
};

export default Player;