import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Spinner from "../Loader";
import PropTypes from "prop-types";

const ImageGallery = ({ error, gallery, status, onClick }) => {
  const onImageClick = (imageURL, alt) => {
    onClick(imageURL, alt);
  };

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
    );
  }
};

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  gallery: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
};
