import React from 'react';
import PropTypes from 'prop-types';

import { MONTH, EXPIRATION_DATE_LIMIT_LENGTH } from '../../../../constants';
import { inputNumberOnly, limitInputLength } from '../../../../utils';

function CardExpirationDate({ cardInfo, setCardInfo }) {
  const handleMonthOnInput = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value >= MONTH.FEBRUARY && value <= MONTH.SEPTEMBER) {
      value = MONTH.LEADING_ZERO + value;
    }

    if (value.length > EXPIRATION_DATE_LIMIT_LENGTH) {
      value = limitInputLength(value, EXPIRATION_DATE_LIMIT_LENGTH);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleMonthOnFocusOut = (event) => {
    let { value } = event.target;

    if (value === MONTH.JANUARY) {
      value = MONTH.LEADING_ZERO + MONTH.JANUARY;
    }

    setCardInfo({
      ...cardInfo,
      month: value,
    });
  };

  const handleYearOnInput = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > EXPIRATION_DATE_LIMIT_LENGTH) {
      value = limitInputLength(value, EXPIRATION_DATE_LIMIT_LENGTH);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          name="month"
          className="input-basic"
          type="text"
          placeholder="MM"
          onInput={handleMonthOnInput}
          onBlur={handleMonthOnFocusOut}
          value={cardInfo.month}
          required
        />
        <input
          name="year"
          className="input-basic"
          type="text"
          placeholder="YY"
          onInput={handleYearOnInput}
          value={cardInfo.year}
          required
        />
      </div>
    </div>
  );
}

export default CardExpirationDate;

CardExpirationDate.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
