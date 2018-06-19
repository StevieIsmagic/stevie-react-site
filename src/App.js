import React, { Component } from 'react';
import ParticleComponent from './components/Particles/ParticleComponent';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
       <Landing name={'Steven'}/>
       {/* <Landing name={'TESTING'}/> */}
       {/* <h1 style={{color: 'green'}}>Hello World :)</h1> */}
       <ParticleComponent />
      </div>
    );
  }
}

export default App;
