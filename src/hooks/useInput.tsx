import { useState } from 'react';

interface Props {
  inputLength: number;
  maxLength: number;
  regex: RegExp;
  errorText: string;
  betweenMaxLength?: Boolean | null;
}

const useInput = ({
  inputLength,
  maxLength,
  regex,
  errorText,
  betweenMaxLength,
}: Props) => {
  const initializeInputFieldState = (length: number) => {
    const inputStates: InputStates = {};

    Array.from({ length }, (_, index) => {
      inputStates[index] = {
        value: '',
        hasError: false,
        hasFocus: index === 0,
        isFilled: false,
      };
    });

    return inputStates;
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
          value: newValue
            .split('')
            .filter((char) => regex.test(char))
            .join(''),
          hasError: true,
          isFilled: isFilled,
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
          isFilled: isFilled,
        },
      }));
    } else if (betweenMaxLength && newValue.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue,
          hasError: false,
          isFilled: true,
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
