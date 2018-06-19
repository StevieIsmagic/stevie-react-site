import React from 'react'
import Particles from 'react-particles-js';
import ParticleParameters from './ParticlesParams'
import './ParticleComponent.css';

const ParticleComponent = (props) => {
 return (
   <div className="ParticleComponent">
    < Particles
      params = {ParticleParameters}
      style={{position: 'absolute'}}
    />
   </div>
 )
}

export default ParticleComponent;