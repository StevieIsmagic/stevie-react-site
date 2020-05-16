import React from 'react';

import './SocialIcons.css';
import Resume from '../../assets/StevenOcampo.pdf';

const SocialIcons = (props) => {
  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" title="stevieismagic github profile" href="https://github.com/stevieismagic"><i className="fab fa-github"></i></a>
      {/* <a target="_blank" rel="noopener noreferrer" title="steven ocampo pdf resume" href={Resume}><i className="far fa-file-pdf"></i></a> */}
      <a target="_blank" rel="noopener noreferrer" title="steven ocampo linkedIn profile" href="https://www.linkedin.com/in/ocamposteven/"><i className="fab fa-linkedin"></i></a>
      <a target="_blank" rel="noopener noreferrer" title="steivieismagic twitter page" href="https://twitter.com/stevieismagic1"><i className="fab fa-twitter"></i></a>
      <a target="_blank" rel="noopener noreferrer" title="stevieismagic facebook profile" href="https://www.facebook.com/stevie.ismagic"><i className="fab fa-facebook"></i></a>
      <a target="_blank" rel="noopener noreferrer" title="stevieismagic instagram" href="https://www.instagram.com/stevieismagic/"><i className="fab fa-instagram"></i></a>
      <a rel="noopener noreferrer" title="send an email to stevenocampo@mail.usf.edu email address" href="mailto:stevenocampo@mail.usf.edu"><i className="far fa-envelope"></i></a>
    </div>
  )
}

export default SocialIcons;