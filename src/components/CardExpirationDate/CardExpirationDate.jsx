import PropTypes from 'prop-types';

import { MONTH, LIMIT_LENGTH } from 'constants';
import { inputNumberOnly, limitInputLength } from 'utils';

function CardExpirationDate({ cardInfo, setCardInfo }) {
  const handleMonthInputBlur = (event) => {
    const { value } = event.target;

    const monthInput = value === String(MONTH.JANUARY) ? value.padStart(2, '0') : value;

    setCardInfo({
      ...cardInfo,
      month: monthInput,
    });
  };

  const handleMonthInputChange = (event) => {
    const { value, name } = event.target;

    const monthInputNumberOnly = inputNumberOnly(value);

    const monthInputLengthSliced =
      monthInputNumberOnly.length > LIMIT_LENGTH.EXPIRATION_DATE
        ? limitInputLength(monthInputNumberOnly, LIMIT_LENGTH.EXPIRATION_DATE)
        : monthInputNumberOnly;

    const monthInputPadded =
      monthInputLengthSliced >= MONTH.FEBRUARY && monthInputLengthSliced <= MONTH.SEPTEMBER
        ? monthInputLengthSliced.padStart(2, '0')
        : monthInputLengthSliced;

    setCardInfo({
      ...cardInfo,
      [name]: monthInputPadded,
    });
  };

  const handleYearInputChange = (event) => {
    const { value, name } = event.target;

    const yearInputNumberOnly = inputNumberOnly(value);

    const yearInputLengthSliced =
      yearInputNumberOnly.length > LIMIT_LENGTH.EXPIRATION_DATE
        ? limitInputLength(yearInputNumberOnly, LIMIT_LENGTH.EXPIRATION_DATE)
        : yearInputNumberOnly;

    setCardInfo({
      ...cardInfo,
      [name]: yearInputLengthSliced,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          name="month"
          className={`input-basic ${
            cardInfo.month.length >= LIMIT_LENGTH.EXPIRATION_DATE &&
            cardInfo.month !== '00' &&
            cardInfo.month !== '0' &&
            cardInfo.month >= MONTH.JANUARY &&
            cardInfo.month <= MONTH.DECEMBER
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
