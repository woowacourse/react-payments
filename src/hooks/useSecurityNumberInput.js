import { useState, useContext, useEffect } from 'react';
import { numberRegex } from '../constant/regularExpression';
import validator from '../validation';
import { CardContext } from '../context/CardContext';
import { INPUT_ACTION } from '../Reducer/InputtedInfoReducer';

function useSecurityNumberInput() {
  const { inputtedInfoDispatch } = useContext(CardContext);
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

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.SECURITY_NUMBER,
      value: number,
      valid: validation,
    });
  }, [number, validation]);

  return {
    number,
    validation,
    isValid: validation,
    onNumberChange,
  };
}

export default useSecurityNumberInput;
