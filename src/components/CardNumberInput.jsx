import React from 'react';
import PropTypes from 'prop-types';
import { checkIsNaN, checkMaxLength, validator } from '../validator';
import { MAX_LENGTH } from '../constants';
import Input from './Input';

function CardNumberInput({ type, value, name, updateCard }) {
  return (
    <Input
      type={type}
      length={MAX_LENGTH.CARD_NUMBER}
      value={value}
      name={name}
      updateCard={updateCard}
      validators={[
        validator(checkMaxLength, value, MAX_LENGTH.CARD_NUMBER),
        validator(checkIsNaN, value),
      ]}
    />
  );
}

CardNumberInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
};

CardNumberInput.defaultProps = {
  type: 'text',
};

export default CardNumberInput;
