import React from 'react';

import './PortfolioItem.css';

const PortfolioItem = (props) => {
  if (props.render) return props.render;
  else 
    return (
      <div className="portfolio-item">
        <div className="portfolio-item__title">TEST TITLE</div>

        <div className="portfolio-item__description">
          Here is a TEST DESCRIPTION for my Portfolio Piece:)
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <a src="#">Code</a>
          <a src="#">Blog</a>
        </div>
      </div>
    );
};

export default PortfolioItem;