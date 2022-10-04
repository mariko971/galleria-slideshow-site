import React, { useState } from "react";

import "./slideshow-item.styles.scss";

const SlideshowItem = ({ data }) => {
  const { name, year, description, artist, source, images } = data;
  const [hidden, setHidden] = useState(true);
  console.log(hidden);
  return (
    <div className="slide-wrapper">
      <header className="slide-header">
        <div className="slide-img">
          <picture>
            <source srcSet={images.hero.large} media="(min-width: 768px)" />
            <img src={images.hero.small} alt="artwork" />
          </picture>
        </div>
        <div className="view-image-link" onClick={() => setHidden(!hidden)}>
          <img src="./iconfinder-icon.svg" alt="arrows" /> VIEW IMAGE
        </div>
      </header>
      <div className="slide-info">
        <div className="slide-art-info">
          <p className="slide-art-name">{name}</p>
          <p className="slide-artist-name">{artist.name}</p>
        </div>
        <div className="slide-artist-thumbnail">
          <img src={artist.image} alt="artwork" />
        </div>
      </div>
      <div className="slide-txt">
        <p className="slide-background-txt">{year}</p>
        <p className="slide-main-txt">{description}</p>
        <div className="slide-source-link">
          <a href={source}>GO TO SOURCE</a>
        </div>
      </div>
      <div
        id="myModal"
        className="modal"
        style={{ display: `${hidden ? "none " : "block"}` }}
      >
        <span className="close" onClick={() => setHidden(true)}>
          Close
        </span>
        <img
          src={images.hero.large}
          alt="art work"
          className="modal-content"
          id="img01"
        />
      </div>
    </div>
  );
};

export default SlideshowItem;
