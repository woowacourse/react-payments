import React from "react";
import PropTypes from "prop-types";

import { CARD_SIZE } from "../constants/card";
import "./style.css";
import "../style/background.css";

const Card = ({
  cardType,
  numbers,
  userName = "",
  expirationDate = "",
  size,
}) => {
  const [firstNumber, secondNumber] = numbers;
  const { name: cardName, color } = cardType;

  return (
    <div className={`card card--${size} font-${size}`}>
      <div className={`card__inner bg-${color}`}>
        <div className="card__inner-card-name font-s">{cardName}</div>
        <div className="card__inner-chip"></div>
        {cardName !== "" && (
          <ul className="font-l">
            <li>{firstNumber}</li>
            <li>{secondNumber}</li>
            <li>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
          </ul>
        )}
        <div className="card__inner-bottom font-m">
          <span>{userName === "" ? "NAME" : userName}</span>
          <span>{expirationDate === "" ? "MM/YY" : expirationDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(CARD_SIZE)),
};
