import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN, checkRange, checkValidDate } from '../../validator';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../../constants';
import Input from './Input';
import AddCardContext from '../../AddCardContext';

function MonthInput({ value, name, expireYear }) {
  const { updateCard } = useContext(AddCardContext);

  return (
    <Input
      shape="input-basic"
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
      onChange={updateCard}
    />
  );
}

MonthInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expireYear: PropTypes.string.isRequired,
};

export default MonthInput;
