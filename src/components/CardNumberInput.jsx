import React from 'react';
import PropTypes from 'prop-types';
import { checkMaxLength, checkIsNaN } from '../util';
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
      validators={{ checkMaxLength, checkIsNaN }}
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
