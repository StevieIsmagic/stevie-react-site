import React from 'react';
import InstagramItem from '../InstagramItem/InstagramItem';

import './InstagramFeed.css';

const testItems = [
  {
    name: 'Test Item',
    render: (
      <div className="instagram-item">
        <div className="instagram-item__media"> MEDIA 1</div>
        <div className="instagram-item__title"> DESCRIPTION 1</div>
      </div>
    )
  },
  {
    name: 'Test Item',
    render: (
      <div className="instagram-item">
        <div className="instagram-item__media"> MEDIA 2</div>
        <div className="instagram-item__title"> DESCRIPTION 2</div>
      </div>
    )
  },
  {
    name: 'Test Item',
    render: (
      <div className="instagram-item">
        <div className="instagram-item__media"> MEDIA 3</div>
        <div className="instagram-item__title"> DESCRIPTION 3</div>
      </div>
    )
  },
];
//   title - date
// description - caption 
// link - media_url


const InstagramFeed = () => {
  return (
    <div className="instagram-page">
      <div className="content-grid">
        <div className="instagram-wrapper">
          {testItems.map((item, i) => (
            <InstagramItem render={item.render} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;