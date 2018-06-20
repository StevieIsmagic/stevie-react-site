import React from 'react';
// import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import ScrollToPrevious from '../ScrollToPrevious/ScrollToPrevious';
// import portfolioItems from './components/PortfolioItem/portfolioItems';

import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          <p>THIS IS WHERE PORTFOLIO PIECES WILL GO :)</p>
          {/* {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))} */}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default Portfolio;