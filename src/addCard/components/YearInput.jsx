import React from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN, checkValidDate } from '../../validator';
import { MAX_LENGTH } from '../../constants';
import Input from './Input';

function YearInput({ value, name, expireMonth }) {
  return (
    <Input
      placeholder="YY"
      length={MAX_LENGTH.DATE}
      value={value}
      name={name}
      validators={[
        validator(checkMaxLength, value, MAX_LENGTH.DATE),
        validator(checkIsNaN, value),
        validator(checkValidDate, expireMonth, value),
      ]}
    />
  );
}

YearInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expireMonth: PropTypes.string.isRequired,
};

export default YearInput;
