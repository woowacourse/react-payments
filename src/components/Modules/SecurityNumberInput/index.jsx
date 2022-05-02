import { useState } from 'react';
import InputLabel from '../../Atoms/InputLabel';
import Input from '../../Atoms/Input';
import validator from '../../../validation';

function SecurityNumberInput() {
  const [number, setNumber] = useState('');
  const [validation, setValidation] = useState(false);

  const onNumberChange = ({ target }) => {
    setNumber(target.value);
    updateValidation(target.value);
  };

  const updateValidation = number => {
    setValidation(validator.validateSecurityNumber(number));
  };

  return (
    <>
      <InputLabel>보안 코드(CVC/CVV)</InputLabel>
      <br />
      <Input
        value={number}
        width="84px"
        height="45px"
        type="password"
        maxLength={3}
        onChange={onNumberChange}
        isValid={validation}
      />
    </>
  );
}

export default SecurityNumberInput;
