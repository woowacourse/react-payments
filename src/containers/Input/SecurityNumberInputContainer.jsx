import { useContext, useState, useEffect } from 'react';
import SecurityNumberInput from 'components/Modules/SecurityNumberInput';
import { numberRegex } from 'constant/regularExpression';
import { CardContext } from 'context/CardContext';
import validator from 'validation';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function SecurityNumberInputContainer() {
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

  return (
    <SecurityNumberInput number={number} validation={validation} onNumberChange={onNumberChange} />
  );
}

export default SecurityNumberInputContainer;
