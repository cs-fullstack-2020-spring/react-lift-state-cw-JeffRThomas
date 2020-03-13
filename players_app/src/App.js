import React from 'react';
import './App.css';
import Player from './components/Player.jsx'//Import Class Based Component "Player" From Folder

function App() {
  return (
    // Call Player Component Twice From Parent Component
    <div className="App">
      <Player plyrNum="#1"/>
      <Player plyrNum="#2"/>
    </div>
  );
}

export default App;
