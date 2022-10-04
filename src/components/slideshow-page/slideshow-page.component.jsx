import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";

import "./slideshow-page.styles.scss";
import SlideshowItem from "../slideshow-item/slideshow-item.component";
import GalleryContext from "../../context/gallery.context";
import Header from "../header/header.component";

const SlideshowPage = () => {
  const data = useContext(GalleryContext);
  const [index, setIndex] = useState(0);
  const slide = data[index];
  return (
    <div className="slideshow-page-container">
      <Header show={true} />
      <SlideshowItem data={slide} />
      <div className="slide-footer">
        <div
          className="progress-line"
          style={{ width: `${(index + 1) * (100 / data.length)}%` }}
        ></div>
        <div className="slide-footer-info">
          <p className="footer-art-name">{slide.name}</p>
          <p className="footer-artist-name">{slide.artist.name}</p>
        </div>
        <div className="slide-nav">
          <span
            className={`back-arrow ${index <= 0 ? "inActive" : ""}`}
            onClick={() => (index > 0 ? setIndex(index - 1) : null)}
          >
            |&#9664;
          </span>
          <span
            className={`next-arrow ${
              index >= data.length - 1 ? "inActive" : ""
            }`}
            onClick={() =>
              index < data.length - 1 ? setIndex(index + 1) : null
            }
          >
            &#9654;|
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideshowPage;
