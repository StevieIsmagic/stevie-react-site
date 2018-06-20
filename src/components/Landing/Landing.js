import React from 'react';
import NavBar from '../NavBar/NavBar';
// import ScrollToNext from './components/ScrollToNext';

import './Landing.css'

const Landing = (props) => {
  return (
    <div className="landing-page">
    {/* <div className='landing-jumbotron'> */}
      <NavBar />
      <main>
        <div className="intro-wrapper">
          <div className="intro-name"> Hello World:) <br/> {`I'm ${props.name}.`} </div>
          <div className="tagline"> Full Stack Dev | Humanist </div>
        </div>
      </main>
      {/* <ScrollToNext pageSelector=".about-page" /> */}
    </div>
  );
};

export default Landing;
