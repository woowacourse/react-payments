import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header>
      <button className="back-button">
        <div className="arrow"></div>
      </button>
      <h2>{props.title}</h2>
    </header>
  );
};

export default Header;
