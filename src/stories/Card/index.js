import React from "react";
import PropTypes from "prop-types";

import { CARD_SIZE } from "../constants/card";
import "./style.css";
import "../style/background.css";

const Card = ({
  cardType,
  cardNumbers = [],
  username = "",
  expirationDate = "",
  size,
}) => {
  const [
    firstNumbers,
    secondNumbers,
    thirdNumbers,
    fourthNumbers,
  ] = cardNumbers;
  const { name: cardName, color } = cardType;

  console.log(firstNumbers, secondNumbers, thirdNumbers, fourthNumbers);

  return (
    <div className={`card card--${size} font-${size}`}>
      <div className={`card__inner bg-${color}`}>
        <div className="card__inner-card-name font-s">{cardName}</div>
        <div className="card__inner-chip"></div>
        {cardNumbers.length !== 0 && (
          <ul className="font-l">
            {firstNumbers && <li>{firstNumbers}</li>}
            {secondNumbers && <li>{secondNumbers}</li>}
            {thirdNumbers && (
              <li>
                {[...Array(thirdNumbers)].map((_, index) => (
                  <span key={index} className="dot"></span>
                ))}
              </li>
            )}
            {fourthNumbers && (
              <li>
                {[...Array(fourthNumbers)].map((_, index) => (
                  <span key={index} className="dot"></span>
                ))}
              </li>
            )}
          </ul>
        )}
        <div className="card__inner-bottom font-m">
          <span className="card__inner-bottom-username">
            {username === "" ? "NAME" : username}
          </span>
          <span className="card__inner-bottom-expiration-date">
            {expirationDate === "" ? "MM/YY" : expirationDate}
          </span>
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
  }).isRequired,
  cardNumbers: PropTypes.arrayOf(PropTypes.string),
  username: PropTypes.string,
  expirationDate: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CARD_SIZE)).isRequired,
};
