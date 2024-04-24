import { useState } from 'react';

export const useInputField = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errorMessages, setErrorMessages] = useState<Record<number, string>>(
    {}
  );

  const updateInputValue = (property: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [property]: value,
    }));
  };

  const updateErrorMessage = (index: number, errorMessage: string) => {
    setErrorMessages((prevErrorMessages) => ({
      ...prevErrorMessages,
      [index]: errorMessage,
    }));
  };

  return {
    values,
    errorMessages,
    updateInputValue,
    updateErrorMessage,
  };
};
