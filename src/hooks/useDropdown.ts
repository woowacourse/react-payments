import { useState } from 'react';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const useDropdown = <T>() => {
  const [selected, setSelected] = useState<T | null>(null);
  const [errorMessage, setErrorMessages] = useState<string>('');

  const handleSelect = (selected: T | null) => {
    if (selected === null) {
      setErrorMessages(ERROR_MESSAGES.NO_SELECT);
      return;
    }

    setErrorMessages('');
    setSelected(selected);
  };

  const reset = () => {
    setSelected(null);
  };

  return {
    selected,
    handleSelect,
    errorMessage,
    reset,
  };
};

export default useDropdown;
