import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Spinner from "../Loader";

const ImageGallery = (props) => {
  const onImageClick = (imageURL, alt) => {
    props.onClick(imageURL, alt);
  };

  const { error, gallery, status, onLoadMore } = props;

  if (status === "idle") {
    return <p className={s.text}>Enter keyword for image search</p>;
  }
  if (status === "pending") {
    return <Spinner />;
  }
  if (status === "rejected") {
    return <h2>{error.message}</h2>;
  }
  if (status === "resolved") {
    return (
      <>
        <ul className={s.ImageGallery}>
          {gallery.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              id={id}
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={onImageClick}
            />
          ))}
        </ul>
        <Button onLoadMore={onLoadMore}>Load more</Button>
      </>
    );
  }
};

export default ImageGallery;
