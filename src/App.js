import React, { Component } from 'react';
import ParticleComponent from './components/Particles/ParticleComponent';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
       <ParticleComponent />
       <Landing name={'Steven'}/>
       <About />
       <Portfolio />
      </div>
    );
  }
}

export default App;
