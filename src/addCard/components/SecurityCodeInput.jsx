import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength, checkIsNaN } from '../../validator';
import { MAX_LENGTH } from '../../constants';
import Input from './Input';
import AddCardContext from '../../AddCardContext';

function SecurityCodeInput({ value, name }) {
  const { updateCard } = useContext(AddCardContext);

  return (
    <Input
      shape="input-basic w-25"
      type="password"
      length={MAX_LENGTH.SECURITY_CODE}
      value={value}
      name={name}
      validators={[validator(checkMaxLength, MAX_LENGTH.SECURITY_CODE), validator(checkIsNaN)]}
      onChange={updateCard}
    />
  );
}

SecurityCodeInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SecurityCodeInput;
