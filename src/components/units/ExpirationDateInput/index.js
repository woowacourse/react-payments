import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import * as Style from './style';

const ExpirationDateInput = (props) => {
  const { type, label, width, expirationDate, setExpirationDate } = props;

  const monthInput = useRef(null);
  const yearInput = useRef(null);

  const isValidMonth = (value) => 1 <= value && value <= 12;
  const isValidYear = (value) => 21 <= value && value < 30;

  const underTwoDigits = (value) => value.length < 2;
  const overTwoDigits = (value) => value.length > 2;

  // TODO: 분기 처리 개선
  const handleChangeDate = (event) => {
    const dateType = event.target.dataset.dateType;
    const value = event.target.value;

    if (underTwoDigits(value)) {
      setExpirationDate((prevDate) => ({ ...prevDate, [dateType]: value }));

      return;
    }

    if (dateType === 'month') {
      if (!isValidMonth(value)) return;

      moveFocusToYearInput();
    } else {
      if (!isValidYear(value)) return;
    }

    if (overTwoDigits(value)) return;

    setExpirationDate((prevDate) => ({ ...prevDate, [dateType]: value }));
  };

  // TODO: month에 1자리수 입력 시 padStart로 0 부여
  const moveFocusToYearInput = () => {
    yearInput.current.focus();
  };

  return (
    <RegisterInputWrapper type={type} label={label} width={width}>
      <Style.InputWrapper>
        <Style.Input
          type="number"
          width="36px"
          placeholder="MM"
          value={expirationDate['month']}
          data-date-type="month"
          onChange={handleChangeDate}
          ref={monthInput}
        />
        <Style.Divider>/</Style.Divider>
        <Style.Input
          type="number"
          width="36px"
          placeholder="YY"
          value={expirationDate['year']}
          data-date-type="year"
          onChange={handleChangeDate}
          ref={yearInput}
        />
      </Style.InputWrapper>
    </RegisterInputWrapper>
  );
};

export default ExpirationDateInput;

ExpirationDateInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.string,
  expirationDate: PropTypes.object,
  setExpirationDate: PropTypes.func.isRequired,
};
