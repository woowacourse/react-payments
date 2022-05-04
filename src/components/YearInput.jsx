import React from 'react';
import PropTypes from 'prop-types';
import { checkMaxLength, checkIsNaN } from '../util';
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
      validators={{ checkMaxLength, checkIsNaN }}
    />
  );
}

YearInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
};

export default YearInput;
