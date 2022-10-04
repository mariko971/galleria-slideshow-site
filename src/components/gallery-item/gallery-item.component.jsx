import React from 'react';

import './gallery-item.styles.scss';

const GalleryItem = ({ artName, artistName, artImage})=>(
    <div className="gallery-wrap" style={
        {backgroundImage: `url(${artImage})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'}
        }>
       <img src={artImage} alt="artwork"/>
        <div className="art-info">
            <div className="art-name">{artName}</div>
            <div className="artist-name">{artistName}</div>
        </div>
    </div>
);

export default GalleryItem;