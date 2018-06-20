import React from 'react';
import ScrollToNext from '../ScrollToNext/ScrollToNext';
import './About.css';

const About = (props) => {
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper"> 
          <div className="about-content">
            <p>
              I love the creative process involved in programming.
            </p>
            <p>I dream of using my skills for good.</p>
            <p>Always.</p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page"/>
    </div>
  );
};

export default About;