import React from 'react';
import InstagramItem from '../InstagramItem/InstagramItem';
import ScrollToPrevious from '../ScrollToPrevious/ScrollToPrevious';
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
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default InstagramFeed;