import React, { Component } from "react";
import "./App.css";

import fetchImage from "./utility/Api";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class App extends Component {
  state = {
    imageName: "",
    status: Status.IDLE,
    page: 1,
    gallery: [],
    showModal: false,
    largeImageURL: "",
    imageAlt: "",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ status: Status.PENDING });
      this.searchImage();
    }
  }

  handleFormSubmit = (name) => {
    this.setState({ imageName: name, page: 1, gallery: [] });
  };

  searchImage = () => {
    const { imageName, page } = this.state;

    fetchImage(imageName, page)
      .then((data) => {
        this.setState(({ gallery, page }) => ({
          gallery: [...gallery, ...data.hits],
          status: Status.RESOLVED,
          page: page + 1,
        }));
      })
      .catch((error) => this.setState({ error, status: Status.REJECTED }));
  };

  onLoadMore = () => {
    this.searchImage();
  };

  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, alt: alt });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { largeImageURL, error, gallery, status, showModal, imageAlt } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          status={status}
          error={error}
          gallery={gallery}
          onClick={this.onOpenModal}
          onLoadMore={this.onLoadMore}
        ></ImageGallery>
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <img src={largeImageURL} alt={imageAlt} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
