import React, { Component } from 'react';
import ParticleComponent from './components/Particles/ParticleComponent';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';
import InstagramFeed from './components/InstagramFeed/InstagramFeed';
class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
       <ParticleComponent />
       <Landing />
       <About />
       {/* <InstagramFeed /> */}
       {/* <Portfolio /> */}
       <ScrollTop />
       <Footer />
      </div>
    );
  }
}

export default App;
