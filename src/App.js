import React, { Component } from 'react';
import ParticleComponent from './components/Particles/ParticleComponent';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
       <Landing />
       <Landing />
       {/* <h1 style={{color: 'white'}}>Hello World :)</h1> */}
       <ParticleComponent />
      </div>
    );
  }
}

export default App;
