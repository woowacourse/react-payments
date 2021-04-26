import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const ExpirationDateInput = (props) => {
  const { setExpirationDate } = props;

  const monthInput = useRef(null);
  const yearInput = useRef(null);

  const handleChangeNumbers = (event) => {
    if (!isTwoDigits(event.target.value)) return;

    const dateType = event.target.dataset.dateType;
    const value = event.target.value;
    setExpirationDate((prevDate) => ({ ...prevDate, [dateType]: value }));

    if (dateType === 'month') {
      moveFocusToYearInput();
    }
  };

  // TODO: month에 1자리수 입력 시 padStart로 0 부여
  const moveFocusToYearInput = () => {
    yearInput.current.focus();
  };

  const isTwoDigits = (value) => value.length === 2;

  return (
    <>
      <Style.Input
        type="number"
        width="28px"
        placeholder="MM"
        data-date-type="month"
        min="1"
        max="12"
        onChange={handleChangeNumbers}
        ref={monthInput}
      />
      <Style.Divider>/</Style.Divider>
      <Style.Input
        type="number"
        width="28px"
        placeholder="YY"
        data-date-type="year"
        min="21"
        max="29"
        onChange={handleChangeNumbers}
        ref={yearInput}
      />
    </>
  );
};

export default ExpirationDateInput;

ExpirationDateInput.propTypes = {
  setExpirationDate: PropTypes.func.isRequired,
};
