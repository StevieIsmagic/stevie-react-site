import React from 'react';
import ScrollToNext from '../ScrollToNext/ScrollToNext';
import './About.css';

const About = (props) => {
  return (
    <div className="about-page">
      <div className="content-grid">
        {/* <h1>Click these links to learn more about me ;)</h1> */}
        <div className="about-wrapper"> 
          <div className="about-content">
            <p> My closest friends call me Stevie . </p>
            <p> I am in love with creating . </p>
            <p> I wrote a book about my life . </p>
            <p> I’m working on a children’s book atm :) </p>
            <p> I am a tech consultant . </p>
            <p> Want to go down a rabbit hole of webapps I’ve made ? </p>
            <p> I’m currently launching this company  - www.RawCure.com </p>
            <p> Here is a list of my favorite songs. </p>
            <p> I studied Philosophy + Religion @ FIU. </p>
            <p> And Gerontology at USF. </p>
            <p> I love people . </p>
            <p> And I think a lot of how to help the world . </p>
            <p> I'm not perfect . </p>
            <p> Even so, my actions are sincere. </p>
            
            
            <p id="principles"> 
              <strong> Simple - Minimalist - Flow </strong>
            </p>
        
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".instagram-page"/>
    </div>
  );
};

export default About;