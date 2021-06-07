import { useState } from 'react';
import { isEnglishTextType } from '../utils/validators';

export const useFormOwner = () => {
  const [owner, setOwner] = useState('');

  const handleOwnerChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isEnglishTextType(text) ? text : ''))
      .join('');

    setOwner(filteredValue);
  };

  return {
    owner: {
      value: owner,
      handleChange: handleOwnerChange,
      isValid: true,
    },
  };
};
