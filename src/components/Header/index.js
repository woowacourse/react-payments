import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Header = ({ title = "", onPageBack }) => {
  return (
    <header className="header">
      {onPageBack && <button onClick={onPageBack}></button>}
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  onPageBack: PropTypes.func,
};
