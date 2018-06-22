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
              I am in love with the creative process. It is a major reason why I enjoy 
              programming so much. The freedom allowed while being creative is a 
              feeling that fuels me. To me, the world of programming is one where 
              the possibilities for what may be created are primarily limited by one's 
              imagination and the desire to impact society.
            </p>
            <p>
              My preferred tools are React, Redux, React Native, Node.js, and MongoDB. 
              I strive to build unique and accessible mobile experiences.
              This website, for example is built using React. 
            </p>
            <p>
              As my skillset has matured through the years, so too has my eye
              for design. The sentiment I feel toward design principles has been
              heavily influenced by the Scandinavian Aesthetic movement of the 1950s.
              So much so that I strive to live all facets of my life in line with 
              these guiding principles.
            </p>
            <p> <strong>Simplicity - Minimalism - Functionality</strong> </p>
            <p>C'est Moi!</p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page"/>
    </div>
  );
};

export default About;