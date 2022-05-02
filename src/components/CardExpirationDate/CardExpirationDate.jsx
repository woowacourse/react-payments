import PropTypes from 'prop-types';

import { MONTH, LIMIT_LENGTH, LEADING_ZERO_MONTHS } from 'constants';
import { inputNumberOnly, limitInputLength } from 'utils';

function CardExpirationDate({ cardInfo, setCardInfo }) {
  const handleMonthInputBlur = (event) => {
    let { value } = event.target;

    if (value === '0' || value === '00') {
      return;
    }

    if (value === MONTH.JANUARY) {
      value = MONTH.LEADING_ZERO + MONTH.JANUARY;
    }

    setCardInfo({
      ...cardInfo,
      month: value,
    });

    event.target.classList.add('input-correct');
  };

  const handleMonthInputChange = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.EXPIRATION_DATE) {
      value = limitInputLength(value, LIMIT_LENGTH.EXPIRATION_DATE);
    }

    if (value >= MONTH.FEBRUARY && value <= MONTH.SEPTEMBER) {
      value = MONTH.LEADING_ZERO + Number(value);
      event.target.classList.add('input-correct');
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    if (value === '00') return;

    if (value >= MONTH.FEBRUARY && value <= MONTH.SEPTEMBER) {
      event.target.value = MONTH.LEADING_ZERO + Number(value);
    }

    if (LEADING_ZERO_MONTHS.includes(value)) event.target.classList.add('input-correct');

    if (value.length >= LIMIT_LENGTH.EXPIRATION_DATE) {
      event.target.classList.add('input-correct');
      return;
    }
    event.target.classList.remove('input-correct');
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

    if (value.length >= LIMIT_LENGTH.EXPIRATION_DATE) {
      event.target.classList.add('input-correct');
      return;
    }
    event.target.classList.remove('input-correct');
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
          onChange={handleMonthInputChange}
          onBlur={handleMonthInputBlur}
          value={cardInfo.month}
          required
        />
        <input
          name="year"
          className="input-basic"
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
