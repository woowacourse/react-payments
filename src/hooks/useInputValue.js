import { useState } from 'react';

const useInputValue = ({ isValidateInput }) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const onChangeValue = ({ target }) => {
    setValue(target.value);
    if (isValidateInput && !isValidateInput(target.value)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return [value, isError, onChangeValue];
};

export default useInputValue;
