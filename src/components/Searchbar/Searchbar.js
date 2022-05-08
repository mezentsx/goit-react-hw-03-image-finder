import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  handleNameChange = (e) => {
    this.props.onSearch(e.currentTarget.value.toLowerCase());
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.search.trim() === "") {
      alert("Enter keyword please");
      return;
    }

    this.props.onSubmit(this.props.search);
    this.props.onSearch("");
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button className={s.SearchFormButton} type="submit">
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.props.search}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
