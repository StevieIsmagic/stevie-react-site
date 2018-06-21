import React, { Component } from 'react';
import ParticleComponent from './components/Particles/ParticleComponent';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
       <ParticleComponent />
       <Landing />
       <About />
       <Portfolio />
       <Footer />
      </div>
    );
  }
}

export default App;
