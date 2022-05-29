import React, { useState } from 'react';

type Validation = { validation: Function };

const useInputValue = ({ validation }: Validation) => {
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
