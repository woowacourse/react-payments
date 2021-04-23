import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "../style/background.css";

const CardTypeRadio = ({ cardType, groupName }) => {
  return (
    <label className="card-type-radio">
      <input type="radio" name={groupName} />
      <div className={`card-type-radio__logo bg-${cardType.color}`}></div>
      <p>{cardType.name}</p>
    </label>
  );
};

export default CardTypeRadio;

CardTypeRadio.propTypes = {};
