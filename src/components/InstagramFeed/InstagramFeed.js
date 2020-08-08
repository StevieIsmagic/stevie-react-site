import React from 'react';
import InstagramItem from '../InstagramItem/InstagramItem';

import './InstagramFeed.css';

const InstagramFeed = () => {
  return (
    <div className="instagram-page">
      <div className="content-grid">
        <div className="instagram-wrapper">
          <h1>IG FEED HERE</h1>
          <InstagramItem />
        </div>

      </div>
    </div>
  );
};

export default InstagramFeed;