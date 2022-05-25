import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import { MAX_LENGTH } from '../../constants';
import { validator, checkMaxLength, checkIsNaN } from '../../validator';
import AddCardContext from '../../AddCardContext';

function PasswordInput({ value, name }) {
  const { updateCard } = useContext(AddCardContext);

  return (
    <Input
      shape="input-basic w-15 mr-10"
      type="password"
      length={MAX_LENGTH.PASSWORD}
      value={value}
      name={name}
      validators={[
        validator(checkMaxLength, value, MAX_LENGTH.PASSWORD),
        validator(checkIsNaN, value),
      ]}
      onChange={updateCard}
    />
  );
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PasswordInput;
