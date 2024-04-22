import { ChangeEvent, useState } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    if (target.value.length > target.maxLength) {
      target.value = target.value.slice(0, target.maxLength);
    }

    setValue(() => target.value);
  };

  return { value, handleChange };
}

export default useInput;
