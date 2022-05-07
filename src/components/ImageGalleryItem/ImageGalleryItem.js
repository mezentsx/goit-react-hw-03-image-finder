import React from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onClick,
}) => {
  const onImageClick = () => {
    onClick(largeImageURL, tags);
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        id={id}
        src={webformatURL}
        alt={tags}
        onClick={onImageClick}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
