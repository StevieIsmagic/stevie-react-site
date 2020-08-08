import React from 'react';
import './InstagramItem.css';

const InstagramItem = ({ render }) => {
if (render) return render
else 
  return (
    <div className="instagram-item">
       <h1>TEST IG ITEM</h1> 
    </div>
  )
};

export default InstagramItem;