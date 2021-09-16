import "./style.css";
import "../@style/background.css";
import React from "react";
import PropTypes from "prop-types";
import Radio from "../@shared/Radio";

const CardTypeRadio = ({
  cardType,
  groupName,
  isChecked = false,
  onChange,
}) => {
  return (
    <Radio
      className="card-type-radio"
      name={groupName}
      value={JSON.stringify(cardType)}
      checked={isChecked}
      onChange={onChange}
    >
      <div className={`card-type-radio__logo bg-${cardType.color}`}></div>
      <p>{cardType.name}</p>
    </Radio>
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
  onChange: PropTypes.func.isRequired,
};
