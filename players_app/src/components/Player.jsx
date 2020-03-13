import React, { Component } from 'react';

class Player extends Component {
    // Define Player Component
    constructor(props) {
        super(props);
    }
    // Define Function To Act As Event Listener For Button Functionality
    WhoPressed = (press) => {
        // Print The Class Instance Of The Most Recent Button Press
        alert(`Player ${this.props.plyrNum} pressed the button.`);
        // Debug Check To Verify Method Call & Expected Print Result
        console.log(`Function Called and player ${this.props.plyrNum} pressed the button`)
    };

    render() {
        return (
            <div>
                {/* Declare Class Instance Rendering */}
                <label>Player {this.props.plyrNum}</label>
                {/* Set Event Listener For Button Press With Method Call Back */}
                <button onClick={this.WhoPressed}>Press</button>
            </div>
        )
    };
};

export default Player;