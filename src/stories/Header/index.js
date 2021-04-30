import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Header = ({ title = "", routeTo, prevPage }) => {
  return (
    <header className="header">
      {prevPage !== "" && <button onClick={() => routeTo(prevPage)}></button>}
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  routeTo: PropTypes.func,
  prevPage: PropTypes.string,
};
