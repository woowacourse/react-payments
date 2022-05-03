import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import { MAX_LENGTH } from '../constants';
import { checkMaxLength, checkIsNaN } from '../util';

function PasswordInput({ value, name, updateCardForm }) {
  return (
    <Input
      size="w-15 mr-10"
      type="password"
      length={MAX_LENGTH.PASSWORD}
      value={value}
      name={name}
      updateCardForm={updateCardForm}
      validators={{ checkMaxLength, checkIsNaN }}
    />
  );
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCardForm: PropTypes.func.isRequired,
};

export default PasswordInput;
