import React from 'react';
import PropTypes from 'prop-types';
import { checkMaxLength, checkIsNaN } from '../util';
import { MAX_LENGTH } from '../constants';
import Input from './Input';

function SecurityCodeInput({ value, name, updateCardForm }) {
  return (
    <Input
      size="w-25"
      type="password"
      length={MAX_LENGTH.SECURITY_CODE}
      value={value}
      name={name}
      updateCardForm={updateCardForm}
      validators={{ checkMaxLength, checkIsNaN }}
    />
  );
}

SecurityCodeInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCardForm: PropTypes.func.isRequired,
};

export default SecurityCodeInput;
