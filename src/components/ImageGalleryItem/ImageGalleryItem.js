import React, { Component } from "react";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  onImageClick = () => {
    this.props.onClick(this.props.largeImageURL, this.props.tags);
  };

  render() {
    const { id, webformatURL, tags } = this.props;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          id={id}
          src={webformatURL}
          alt={tags}
          onClick={this.onImageClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
