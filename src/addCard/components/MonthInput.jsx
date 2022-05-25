import React from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN, checkRange, checkValidDate } from '../../validator';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../../constants';
import Input from './Input';

function MonthInput({ value, name, expireYear }) {
  return (
    <Input
      placeholder="MM"
      length={MAX_LENGTH.DATE}
      minLength={MIN_LENGTH.MONTH}
      value={value}
      name={name}
      validators={[
        validator(checkMaxLength, value, MAX_LENGTH.DATE),
        validator(checkIsNaN, value),
        validator(checkRange, RANGE.MONTH_MIN, RANGE.MONTH_MAX, value),
        validator(checkValidDate, value, expireYear),
      ]}
    />
  );
}

MonthInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expireYear: PropTypes.string.isRequired,
};

export default MonthInput;
