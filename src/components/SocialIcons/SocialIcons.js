import React from 'react';

import './SocialIcons.css';

const SocialIcons = (props) => {
  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevieismagic"><i className="fab fa-github"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="#"><i className="far fa-file-pdf"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ocamposteven/"><i className="fab fa-linkedin"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/stevieismagic1"><i className="fab fa-twitter"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/stevie.ismagic"><i className="fab fa-facebook"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/stevieismagic/"><i className="fab fa-instagram"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/StevieIsmagic/stevie-react-site"><i className="far fa-file-code"></i></a>
    </div>
  )
}

export default SocialIcons;