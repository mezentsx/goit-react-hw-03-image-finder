import React from "react";
import s from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onLoadMore }) => {
  return (
    <button className={s.Button} type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = { onLoadMore: PropTypes.func.isRequired };
