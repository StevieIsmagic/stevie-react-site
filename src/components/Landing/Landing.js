import React from 'react';
import NavBar from '../NavBar/NavBar';
import ScrollToNext from '../ScrollToNext/ScrollToNext';

import './Landing.css'

const Landing = (props) => {
  return (
    <div className="landing-page">
      <NavBar />
      <main>
        <div className="intro-wrapper">
          <div className="intro-name"> Hello World:) <br/> I'm Steven </div>
          <div className="tagline"> Full Stack Dev <br /> Lover - Learner - Doer</div>
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default Landing;
