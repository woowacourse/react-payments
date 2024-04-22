import { useState } from "react"
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";

interface UseCardNumbersFormSectionProps {
  changeCardNumbers: (newNumber: string, index: number) => void
  value: string[]
}

const initializeInputFieldState = (length: number) => {
  const obj: InputStates = [];
  for (let i = 0; i < length; i++) {
    obj[i] = {
      hasError: false,
      hasFocus: i === 0,
    };
  }
  return obj;
};

const useCardNumbersFormSection = ({ changeCardNumbers, value }: UseCardNumbersFormSectionProps) => {
  const [inputState, setInputState] = useState(initializeInputFieldState(OPTION.cardNumberInputCount));
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;

    if (!REGEX.numbers.test(inputValue)) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          hasError: true,
        }
      }))
      setErrorMessage(ERROR_MESSAGE.onlyNumber);
      changeCardNumbers(inputValue.slice(0, - 1), index)
    } else {
      resetErrors();
      changeCardNumbers(inputValue, index)
    }
  }

  const handleOnFocus = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));

    resetErrors();
  };

  const handleOnBlur = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));

    if (checkHasNoFocus()) {
      resetErrors();
      handleValidate();
    }
  };

  const checkHasNoFocus = () => {
    return Object.values(inputState).every((field) => !field.hasFocus);
  }

  const handleValidate = () => {
    if (value.reduce((prev, current) => prev + current, '') === '') return

    let hasAnyError = false;

    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = value[Number(key)];
      if (field.length !== OPTION.cardNumberMaxLength) {
        acc[Number(key)] = { ...acc[Number(key)], hasError: true };
        hasAnyError = true;
      } else {
        acc[Number(key)] = { ...acc[Number(key)], hasError: false };
      }
      return acc;
    }, []);

    setInputState(newState);

    if (hasAnyError) {
      setErrorMessage(ERROR_MESSAGE.cardNumberOutOfRange);
    } else {
      setErrorMessage('');
    }
  };

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[Number(key)];
      acc[Number(key)] = { ...field, hasError: false };
      return acc;
    }, []);

    setInputState(newState);

    setErrorMessage('');
  };

  return [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] as const
}

export default useCardNumbersFormSection;