import React from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN } from '../validator';
import { MAX_LENGTH } from '../constants';
import Input from './Input';

function YearInput({ value, name, updateCard }) {
  return (
    <Input
      placeholder="YY"
      length={MAX_LENGTH.DATE}
      value={value}
      name={name}
      updateCard={updateCard}
      validators={[validator(checkMaxLength, value, MAX_LENGTH.DATE), validator(checkIsNaN, value)]}
    />
  );
}

YearInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
};

export default YearInput;
