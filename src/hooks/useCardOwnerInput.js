import { useState, useContext, useEffect } from 'react';
import { englishRegex } from 'constant/regularExpression';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import validator from 'validation';

function useCardOwnerInput() {
  const { inputtedInfoDispatch } = useContext(CardContext);
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(false);

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

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.OWNER_NAME,
      value: name,
      valid: validation,
    });
  }, [name, validation]);

  return {
    name,
    validation,
    isValid: validation,
    onNameChange,
  };
}

export default useCardOwnerInput;
