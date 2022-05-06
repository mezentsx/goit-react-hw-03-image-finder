import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = (props) => {
  const onImageClick = () => {
    props.onClick(props.largeImageURL, props.tags);
  };

  const { id, webformatURL, tags } = props;

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
