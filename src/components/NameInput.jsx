import React from 'react';
import PropTypes from 'prop-types';
import { checkMaxLength } from '../util';
import { MAX_LENGTH, MIN_LENGTH } from '../constants';
import Input from './Input';

function NameInput({ value, name, updateCard }) {
  return (
    <Input
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      length={MAX_LENGTH.NAME}
      minLength={MIN_LENGTH.NAME}
      name={name}
      value={value}
      required={false}
      updateCard={updateCard}
      validators={{ checkMaxLength }}
    />
  );
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
};

export default NameInput;
