import { useState } from 'react';
import { numberRegex } from '../constant/regularExpression';
import validator from '../validation';

function useSecurityNumberInput() {
  const [number, setNumber] = useState('');
  const [validation, setValidation] = useState(false);

  const onNumberChange = ({ target, nativeEvent: { data } }) => {
    if (numberRegex.test(data) || !data) {
      setNumber(target.value);
      updateValidation(target.value);
    }
  };

  const updateValidation = number => {
    setValidation(validator.validateSecurityNumber(number));
  };

  return {
    number,
    validation,
    isValid: validation,
    onNumberChange,
  };
}

export default useSecurityNumberInput;
