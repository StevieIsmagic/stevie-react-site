import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from './Components/Particles/Particles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stevie's React Site</h1>
        </header>
        <p className="App-intro">
          Hello Lovers
        </p>
        <Particles />
      </div>
    );
  }
}

export default App;
