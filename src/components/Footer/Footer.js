import React from 'react';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <div className="content-grids">
        <div>
          By <a href="https://github.com/StevieIsmagic">Stevie IsMagic </a>
          <span role="img" aria-label="heart">❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;