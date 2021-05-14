import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "../style/background.css";

const CardTypeRadio = ({
  cardType,
  groupName,
  isChecked = false,
  value,
  onChange,
}) => {
  return (
    <label className="card-type-radio">
      <input
        type="radio"
        name={groupName}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <div className={`card-type-radio__logo bg-${cardType.color}`}></div>
      <p>{cardType.name}</p>
    </label>
  );
};

export default CardTypeRadio;

CardTypeRadio.propTypes = {
  cardType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  groupName: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
