import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import ScrollToPrevious from '../ScrollToPrevious/ScrollToPrevious';
import portfolioItems from './portfolio-items';
import insta from './insta';

import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>i like words =) </h1>
        <div className="portfolio-wrapper">
          {/* {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))} */}

          <h1>IG feed here . </h1>
          {insta()}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default Portfolio;