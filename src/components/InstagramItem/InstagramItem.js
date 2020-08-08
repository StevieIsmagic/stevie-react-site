import React from 'react';

import './InstagramItem.css';

const InstagramItem = ({ item }) => {
  return (
    <a href="https://www.instagram.com/stevieismagic/">
      <div className="instagram-item">
          <div className="instagram-item__media">
            <img src={item.media_url}/>
          </div>
        <div className="instagram-item__title">{item.caption.substring(0,20)}..</div>
      </div>
    </a>
  );
};

export default InstagramItem;