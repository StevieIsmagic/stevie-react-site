import React from 'react';

import './InstagramItem.css';

const InstagramItem = ({ render }) => {
if (render) return render
else 
  return (
    <div className="instagram-item">
      <div className="instagram-item__media"> TEST MEDIA</div>
      <div className="instagram-item__title"> TEST DESCRIPTION</div>
    </div>
  )
};

export default InstagramItem;