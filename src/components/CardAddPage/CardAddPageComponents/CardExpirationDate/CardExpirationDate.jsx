import React from 'react';
import PropTypes from 'prop-types';

function CardExpirationDate({ cardInfo, setCardInfo }) {
  const handleMonthOnInput = (event) => {
    if (event.target.value >= 2 && event.target.value <= 9) {
      event.target.value = '0' + event.target.value;
    }
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');
    let { value, name } = event.target;
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleMonthOnFocusOut = (event) => {
    if (event.target.value === '1') {
      event.target.value = '01';
    }
    setCardInfo({
      ...cardInfo,
      month: event.target.value,
    });
  };

  const handleYearOnInput = (event) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');
    let { value, name } = event.target;
    if (value.length > 2) {
      value = value.slice(0, 2);
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
