import { useState } from "react";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import useUpdatePreviewState from "./useUpdatePreviewState";

const initializeInputFieldState = (length: number) => {
  const obj: InputStates = [];
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

const nowDate = new Date();
const year = nowDate.getFullYear().toString().slice(2, 4);
const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
const now = year + month;

const useExpirationDateFormSection = ({ changeExpiration }: UseExpirationFormSectionProps) => {
  const [inputState, setInputState] = useUpdatePreviewState(
    initializeInputFieldState(OPTION.expirationDateInputCount),
  );
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;
    const isFilled = newValue.length === OPTION.expirationDateMaxLength;

    if (
      newValue.length <= OPTION.expirationDateMaxLength &&
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
        changeExpiration({ month: newState[0].value, year: newState[1].value })
      });
      setErrorMessage(ERROR_MESSAGE.onlyNumber);
    } else if (newValue.length > OPTION.expirationDateMaxLength) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, OPTION.expirationDateMaxLength),
          hasError: false,
        },
      }), (newState: InputStates) => {
        changeExpiration({ month: newState[0].value, year: newState[1].value })
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
      }), (newState: InputStates) => {
        changeExpiration({ month: newState[0].value, year: newState[1].value })
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

    if (index === 0) {
      formatMonth();
    }

    if (checkHasNoFocus()) {
      resetErrors();
      handleValidate();
    }
  };

  const formatMonth = () => {
    if (REGEX.oneToNine.test(inputState[0].value)) {
      setInputState((prevState) => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: '0' + prevState[0].value,
          isFilled: true,
        },
      }));
    } else if (REGEX.zero.test(inputState[0].value)) {
      setInputState((prevState) => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: OPTION.minMonth,
        },
      }));
    } else if (
      !REGEX.month.test(inputState[0].value) &&
      inputState[0].value.length
    ) {
      setInputState((prevState) => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: OPTION.maxMonth,
        },
      }));
    }
  };

  const checkHasNoFocus = () => {
    return Object.values(inputState).every((field) => !field.hasFocus);
  }

  const validateExpired = () => {
    const expireDate = +(inputState[1].value + inputState[0].value);
    const nowDate = +now;

    if (nowDate - expireDate > 0) {
      inputState[0].hasError = true;
      inputState[1].hasError = true;
      setErrorMessage(ERROR_MESSAGE.expiredCard);
    } else {
      setErrorMessage('');
    }
  };

  const handleValidate = () => {
    let hasAnyError = false;

    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[Number(key)];
      if (!field.isFilled) {
        acc[Number(key)] = { ...field, hasError: true };
        hasAnyError = true;
      } else {
        acc[Number(key)] = field;
      }
      return acc;
    }, []);

    setInputState(() => newState);

    if (hasAnyError) {
      setErrorMessage(ERROR_MESSAGE.expiryFormat);
    } else {
      validateExpired();
    }
  };

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[Number(key)];
      acc[Number(key)] = { ...field, hasError: false };
      return acc;
    }, []);

    setInputState(() => newState);
    setErrorMessage('');
  };


  return [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useExpirationDateFormSection;