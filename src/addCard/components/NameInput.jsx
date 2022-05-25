import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { validator, checkMaxLength } from '../../validator';
import { MAX_LENGTH, MIN_LENGTH } from '../../constants';
import Input from './Input';
import AddCardContext from '../../AddCardContext';

function NameInput({ value, name }) {
  const { updateCard } = useContext(AddCardContext);

  return (
    <Input
      shape="input-basic"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      length={MAX_LENGTH.NAME}
      minLength={MIN_LENGTH.NAME}
      name={name}
      value={value}
      required={false}
      validators={[validator(checkMaxLength, value, MAX_LENGTH.NAME)]}
      onChange={updateCard}
    />
  );
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NameInput;
