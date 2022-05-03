import { useState } from 'react';

const useInputValue = ({ validation }) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const onChangeValue = ({ target }) => {
    const targetValue = target.value;
    setValue(targetValue);
    if (validation && !validation(targetValue) && targetValue !== '') {
      setError(true);

      return;
    }
    setError(false);
  };

  return [value, isError, onChangeValue];
};

export default useInputValue;
