import { useState } from "react";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import useUpdatePreviewState from "./useUpdatePreviewState";

const initializeInputFieldState = (length: number) => {
  const obj: InputStates = {};
  for (let i = 0; i < length; i++) {
    obj[i] = {
      value: '',
      hasError: false,
      hasFocus: i === 0,
      isFilled: false,
    };
  }
  return obj;
};

const useCardNumbersFormSection = ({ changeCardNumber }: UseCardNumbersFormSectionProps) => {
  const [inputState, setInputState] = useUpdatePreviewState(
    initializeInputFieldState(OPTION.cardNumberInputCount),
  );
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;
    const isFilled = newValue.length === OPTION.cardNumberMaxLength;

    if (
      newValue.length <= OPTION.cardNumberMaxLength &&
      !REGEX.numbers.test(newValue)
    ) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, newValue.length - 1),
          hasError: true,
        },
      }), (newState: InputStates) => {
        changeCardNumber(Object.values(newState).map(field => field.value));
      });
      setErrorMessage(ERROR_MESSAGE.onlyNumber);
    } else if (newValue.length > OPTION.cardNumberMaxLength) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, OPTION.cardNumberMaxLength),
          hasError: false,
        },
      }),
        (newState: InputStates) => {
          changeCardNumber(Object.values(newState).map(field => field.value));
        });
    } else {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue,
          hasError: false,
          isFilled: isFilled,
        },
      }),
        (newState: InputStates) => {
          changeCardNumber(Object.values(newState).map(field => field.value));
        });
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
    let hasAnyError = false;

    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      if (!field.isFilled) {
        acc[key] = { ...field, hasError: true };
        hasAnyError = true;
      } else {
        acc[key] = field;
      }
      return acc;
    }, {});

    setInputState(() => newState, (newState: InputStates) => {
      changeCardNumber(Object.values(newState).map(field => field.value));
    });

    if (hasAnyError) {
      setErrorMessage(ERROR_MESSAGE.cardNumberOutOfRange);
    } else {
      setErrorMessage('');
    }
  };

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      acc[key] = { ...field, hasError: false };
      return acc;
    }, {});

    setInputState(() => newState, (newState: InputStates) => {
      changeCardNumber(Object.values(newState).map(field => field.value));
    });
    setErrorMessage('');
  };


  return [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useCardNumbersFormSection;