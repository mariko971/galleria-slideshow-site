import React, { useContext } from "react";
import Masonry from "react-masonry-css";

import "./gallery.styles.scss";

import GalleryItem from "../gallery-item/gallery-item.component";
import GalleryContext from "../../context/gallery.context";

const Gallery = () => {
  const Data = useContext(GalleryContext);
  let index = 0;

  const newData = Data.map((item) => {
    index++;
    return { ...item, id: index };
  });

  // const evenFilter =newData.filter(item=>item.id%2===0);
  // const oddFilter =newData.filter(item=>item.id%2!==0);
  // // const newFilteredData =[...oddFilter, ...evenFilter];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {newData.map((item) => {
        const {
          name,
          id,
          artist,
          images: { thumbnail },
        } = item;
        return (
          <GalleryItem
            key={id}
            artName={name}
            artistName={artist.name}
            artImage={thumbnail}
          />
        );
      })}
    </Masonry>
  );
};

export default Gallery;
