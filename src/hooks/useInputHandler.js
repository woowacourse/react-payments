import { useState } from 'react';

function useInputHandler(validator, initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  const updateInputState = ({ name, value }) => {
    setErrorMessage('');

    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    setInputValue(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { errorMessage, setErrorMessage, inputValue, updateInputState };
}

export default useInputHandler;
