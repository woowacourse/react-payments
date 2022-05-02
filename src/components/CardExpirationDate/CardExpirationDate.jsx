import PropTypes from 'prop-types';

import { MONTH, LIMIT_LENGTH } from 'constants';
import { inputNumberOnly, limitInputLength } from 'utils';

function CardExpirationDate({ cardInfo, setCardInfo }) {
  const handleMonthInputBlur = (event) => {
    let { value } = event.target;

    if (value === MONTH.JANUARY) {
      value = MONTH.LEADING_ZERO + MONTH.JANUARY;
    }

    setCardInfo({
      ...cardInfo,
      month: value,
    });
  };

  const handleMonthInputChange = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.EXPIRATION_DATE) {
      value = limitInputLength(value, LIMIT_LENGTH.EXPIRATION_DATE);
    }

    if (value >= MONTH.FEBRUARY && value <= MONTH.SEPTEMBER) {
      value = MONTH.LEADING_ZERO + Number(value);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    if (value === '00') return;

    if (value >= MONTH.FEBRUARY && value <= MONTH.SEPTEMBER) {
      event.target.value = MONTH.LEADING_ZERO + Number(value);
    }
  };

  const handleYearInputChange = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.EXPIRATION_DATE) {
      value = limitInputLength(value, LIMIT_LENGTH.EXPIRATION_DATE);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    if (value === '00') return;
  };

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          name="month"
          className={`input-basic ${
            (cardInfo.month.length >= LIMIT_LENGTH.EXPIRATION_DATE && !cardInfo.month === '00') ||
            !cardInfo.month === '0' ||
            (cardInfo.month >= MONTH.FEBRUARY && cardInfo.month <= MONTH.SEPTEMBER)
              ? 'input-correct'
              : null
          }`}
          type="text"
          placeholder="MM"
          onChange={handleMonthInputChange}
          onBlur={handleMonthInputBlur}
          value={cardInfo.month}
          required
        />
        <input
          name="year"
          className={`input-basic ${
            cardInfo.year.length >= LIMIT_LENGTH.EXPIRATION_DATE ? 'input-correct' : null
          }`}
          type="text"
          placeholder="YY"
          onChange={handleYearInputChange}
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
