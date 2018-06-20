import React, { Component } from 'react';
import ParticleComponent from './components/Particles/ParticleComponent';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div>
       <ParticleComponent />
       <Landing name={'Steven'}/>
       <About />

       {/* <Landing name={'TESTING'}/> */}
       {/* <h1 style={{color: 'green'}}>Hello World :)</h1> */}
      </div>
    );
  }
}

export default App;
