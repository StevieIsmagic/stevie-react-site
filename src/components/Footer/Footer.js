import React from 'react';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <div className="content-grids">
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/StevieIsmagic/stevie-react-site">By: StevieIsMagic</a>
          <span role="img" aria-label="heart">❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;