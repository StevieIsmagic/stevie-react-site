import React from 'react';
import InstagramItem from '../InstagramItem/InstagramItem';
import { mediaObjects } from './ig-media-objects';

import './InstagramFeed.css';

const InstagramFeed = () => {
  return (
    <div className="instagram-page">
      <div className="content-grid">
        <div className="instagram-wrapper">
          {mediaObjects.map((item, i) => (
            <InstagramItem item={item} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;