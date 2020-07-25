import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import ScrollToPrevious from '../ScrollToPrevious/ScrollToPrevious';
import portfolioItems from './portfolio-items';
import fetchInstagramFeed from './fetchInstagramFeed';
import { mediaObjects } from './ig-media-objects';

import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>i like words =) </h1>
        <div className="portfolio-wrapper">

        
          {/* TO-DO
          
          for each media object, request media_url .
          make one async bluebird call for all urls ?
          OR 20 individual requests ? 
          
          
          {mediaObjects.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))} */}


        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default Portfolio;