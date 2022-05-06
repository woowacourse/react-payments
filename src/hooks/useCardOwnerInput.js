import { useState } from 'react';
import { PLACEHOLDER } from '../constant';
import { englishRegex } from '../constant/regularExpression';
import validator from '../validation';

function useCardOwnerInput() {
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(false);
  const ownerNameString = name || PLACEHOLDER.NAME;

  const onNameChange = ({ target, nativeEvent: { data } }) => {
    if (englishRegex.test(data) || !data) {
      const name = target.value.toUpperCase();

      setName(name);
      updateValidation(name);
    }
  };

  const updateValidation = name => {
    setValidation(validator.validateOwnerName(name));
  };

  return {
    name,
    ownerNameString,
    validation,
    isValid: validation,
    onNameChange,
  };
}

export default useCardOwnerInput;
