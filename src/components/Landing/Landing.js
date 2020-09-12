import React from 'react';
import NavBar from '../NavBar/NavBar';
import SocialIcons from '../SocialIcons/SocialIcons';
import ScrollToNext from '../ScrollToNext/ScrollToNext';

import './Landing.css'

const Landing = (props) => {
  return (
    <div className="landing-page">
      <NavBar />
      <main>
        <div className="intro-wrapper">
          <div className="intro-name"> Hello World. <br/> I'm Stevie </div>
          <div className="tagline"> Lover | Learner | Doer</div>
          {/* <div className="tagline"> Want to help me save your life ? </div> */}
          {/* <div className="tagline"> CLICK HERE </div> */}
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default Landing;
