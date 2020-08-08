import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import ScrollToPrevious from '../ScrollToPrevious/ScrollToPrevious';
import portfolioItems from './portfolio-items';

import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <div className="portfolio-wrapper">
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default Portfolio;