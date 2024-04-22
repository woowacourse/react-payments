import { useState } from 'react';

const useInput = ({
  inputLength,
  maxLength,
  regex,
  errorText,
}: {
  inputLength: number;
  maxLength: number;
  regex: RegExp;
  errorText: string;
}) => {
  const initializeInputFieldState = (length: number) => {
    return Array.from({ length }, (_, index) => ({
      value: '',
      hasError: false,
      hasFocus: index === 0,
      isFilled: false,
    })).reduce((acc, curr, index) => {
      acc[index] = curr;
      return acc;
    }, {} as InputStates);
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [inputState, setInputState] = useState<InputStates>(
    initializeInputFieldState(inputLength),
  );

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === maxLength;

    if (newValue.length <= maxLength && !regex.test(newValue)) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, newValue.length - 1),
          hasError: true,
        },
      }));
      setErrorMessage(errorText);
    } else if (newValue.length > maxLength) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, maxLength),
          hasError: false,
        },
      }));
    } else {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue,
          hasError: false,
          isFilled: isFilled,
        },
      }));
    }
  };

  const setFocus = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));
  };

  const setBlur = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));
  };

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      acc[key] = { ...field, hasError: false };
      return acc;
    }, {});
    setInputState(newState);
    setErrorMessage('');
  };

  return {
    inputState,
    errorMessage,
    setInputState,
    setErrorMessage,
    handleValueChange,
    setFocus,
    setBlur,
    resetErrors,
  };
};

export default useInput;
