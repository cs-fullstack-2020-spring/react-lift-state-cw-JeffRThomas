import React from 'react';
import './App.css';
import Player from './components/Player.jsx'

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state ={

        };
    };

    render() {
        return (
            <div className="App">
                <h1>The winner is:</h1>
                <Player plyrNum="#1" />
                <Player plyrNum="#2" />
            </div>
        );
    }
}

export default GameContainer;