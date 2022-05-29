import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN, checkValidDate } from '../../validator';
import { MAX_LENGTH } from '../../constants';
import Input from './Input';
import AddCardContext from '../../AddCardContext';

function YearInput({ value, name, expireMonth }) {
  const { updateCard } = useContext(AddCardContext);

  const checkDate = (targetName) => {
    try {
      checkValidDate(expireMonth, value);
    } catch (error) {
      alert(error.message);
      updateCard('', targetName);
    }
  };

  return (
    <Input
      shape="input-basic"
      placeholder="YY"
      length={MAX_LENGTH.DATE}
      value={value}
      name={name}
      validators={[validator(checkMaxLength, MAX_LENGTH.DATE), validator(checkIsNaN)]}
      onChange={updateCard}
      onBlur={checkDate}
    />
  );
}

YearInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expireMonth: PropTypes.string.isRequired,
};

export default YearInput;
