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
              I'm in love with the creative process. It's a major reason why I enjoy programming so much.
              The world of programming is one where the possibilities for what may be created are limited primarily by one's imagination.
              I especially enjoy the idea of never knowing it all. There's always something new to be learned.
            </p>
            <p>
              If you'd like a good reference of how far my skills have come, visit my previous site and its source code. Please try not to laugh. :)
            </p>
            <p>
              Through the years, as my skillset has matured, so too has my eye
              for design. The sentiment I feel toward design principles has always been influenced 
              greatly by the Scandinavian Aesthetic movement of the 1950s.
              So much so that I strive to live all facets of my life by these guiding principles.
            </p>
            <p> <em>Simplicity - Minimalism - Functionality</em> </p>
            <p>C'est Moi!</p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page"/>
    </div>
  );
};

export default About;