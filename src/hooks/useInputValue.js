import { useState } from 'react';

const useInputValue = ({ isValidateInput, isInputAvailableValue } = {}) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const onChangeValue = ({ target }) => {
    const value = target.value;
    if (
      isInputAvailableValue &&
      !isInputAvailableValue(value) &&
      value.length !== 0
    )
      return;
    setValue(target.value);
    if (isValidateInput && !isValidateInput(value)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return [value, isError, onChangeValue];
};

export default useInputValue;
