import React from 'react';
import PropTypes from 'prop-types';

import { LIMIT_LENGTH } from '../../../../constants';
import { limitInputLength, inputNumberOnly } from '../../../../utils';

function CardNumber({ cardInfo, setCardInfo }) {
  const handleOnInput = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.CARD_NUMBER) {
      value = limitInputLength(value, LIMIT_LENGTH.CARD_NUMBER);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          name="number1"
          className="input-basic"
          type="text"
          onInput={handleOnInput}
          value={cardInfo.number1}
          required
        />
        <input
          name="number2"
          className="input-basic"
          type="text"
          onInput={handleOnInput}
          value={cardInfo.number2}
          required
        />
        <input
          name="number3"
          className="input-basic"
          type="password"
          onInput={handleOnInput}
          value={cardInfo.number3}
          required
        />
        <input
          name="number4"
          className="input-basic"
          type="password"
          onInput={handleOnInput}
          value={cardInfo.number4}
          required
        />
      </div>
    </div>
  );
}

export default CardNumber;

CardNumber.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
