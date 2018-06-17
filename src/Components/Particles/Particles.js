import React, { Component } from 'react';
import Particles from 'react-particles-js';
// import logo from './logo.svg';
import params from './particleParams';


class ParticlesComp extends Component {

  render() {
    return ( 
      <Particles 
        params={params}
        style = {
          {
            width: '100%',
            // backgroundImage: `url(${logo})`
          }
        }
        />
    );
  };

}

export default ParticlesComp;