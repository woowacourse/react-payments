import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import { DATE_TYPE } from '../../../constants/constants';
import * as Style from './style';

const ExpirationDateInput = (props) => {
  const { type, label, width, expirationDate, setExpirationDate } = props;

  const { MONTH, YEAR } = DATE_TYPE;
  const monthInput = useRef(null);
  const yearInput = useRef(null);

  const isValidMonth = (value) => 1 <= value && value <= 12;
  const isValidYear = (value) => value >= 21;

  const isTwoDigits = (value) => value.length === 2;

  const handleChangeMonth = (event) => {
    const value = event.target.value;

    if (isTwoDigits(value)) {
      if (!isValidMonth(value)) return;

      yearInput.current.focus();
    }
    setExpirationDate((prevDate) => ({ ...prevDate, [MONTH]: value }));
  };

  const handleChangeYear = (event) => {
    const value = event.target.value;

    if (isTwoDigits(value)) {
      if (!isValidYear(value)) return;

      yearInput.current.blur();
    }

    setExpirationDate((prevDate) => ({ ...prevDate, [YEAR]: value }));
  };

  return (
    <RegisterInputWrapper type={type} label={label} width={width}>
      <Style.InputWrapper>
        <Style.Input
          type="number"
          aria-label="expiration-date-input-month"
          width="44px"
          placeholder="MM"
          value={expirationDate[MONTH]}
          data-date-type={MONTH}
          onChange={handleChangeMonth}
          ref={monthInput}
          required
        />
        <Style.Divider>/</Style.Divider>
        <Style.Input
          type="number"
          aria-label="expiration-date-input-year"
          width="44px"
          placeholder="YY"
          value={expirationDate[YEAR]}
          data-date-type={YEAR}
          onChange={handleChangeYear}
          ref={yearInput}
          required
        />
      </Style.InputWrapper>
    </RegisterInputWrapper>
  );
};

ExpirationDateInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  expirationDate: PropTypes.object.isRequired,
  setExpirationDate: PropTypes.func.isRequired,
};

export default ExpirationDateInput;
