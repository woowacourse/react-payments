import { useState } from "react";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";

interface UseExpirationFormSectionProps {
  changeExpiration: (expiration: Expiration, isComplete?: boolean) => void;
  expiration: Expiration;
}

interface ExpirationInputState {
  [key: string]: InputState;
  month: InputState;
  year: InputState;
}

type ExpirationInputType = 'month' | 'year'

const nowDate = new Date();
const year = nowDate.getFullYear().toString().slice(2, 4);
const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
const now = year + month;

const useExpirationDateFormSection = ({ changeExpiration, expiration }: UseExpirationFormSectionProps) => {
  const [inputState, setInputState] = useState<ExpirationInputState>({ month: { hasError: false, hasFocus: false }, year: { hasError: false, hasFocus: false } });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: ExpirationInputType) => {
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
      changeExpiration({ ...expiration, [index]: inputValue.slice(0, -1) })
    } else {
      changeExpiration({ ...expiration, [index]: inputValue })
    }
  }


  const handleOnFocus = (index: ExpirationInputType) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));
    resetErrors();
  };

  const handleOnBlur = (index: ExpirationInputType) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));

    if (index === 'month') {
      formatMonth();
    }

    if (checkHasNoFocus()) {
      resetErrors();
      handleValidate();
    }
  };

  const formatMonth = () => {
    if (expiration.month.length === 0) return
    if (REGEX.oneToNine.test(expiration.month)) {
      changeExpiration({ month: '0' + expiration.month, year: expiration.year })
    }
    if (REGEX.zero.test(expiration.month)) {
      changeExpiration({ month: OPTION.minMonth, year: expiration.year })
    }
    if (
      !REGEX.month.test(expiration.month)
    ) {
      changeExpiration({ month: OPTION.maxMonth, year: expiration.year })
    }
  };

  const checkHasNoFocus = () => {
    return Object.values(inputState).every((field) => !field.hasFocus);
  }

  const validateExpired = () => {
    const expireDate = +(expiration.year + expiration.month);
    const nowDate = +now;

    if (nowDate - expireDate > 0) {
      setInputState({ month: { ...inputState.month, hasError: true }, year: { ...inputState.month, hasError: true } });
      setErrorMessage(ERROR_MESSAGE.expiredCard);
    } else {
      setErrorMessage('');
      changeExpiration(expiration, true)
    }
  };

  const handleValidate = () => {
    if (expiration.month.length + expiration.year.length === 0) return
    let hasAnyError = false;

    if (expiration.month.length !== OPTION.expirationDateMaxLength) {
      setInputState({ ...inputState, month: { ...inputState[month], hasError: true } });
      hasAnyError = true;
    }
    if (expiration.year.length !== OPTION.expirationDateMaxLength) {
      setInputState({ ...inputState, year: { ...inputState[year], hasError: true } });
      hasAnyError = true;
    }

    if (hasAnyError) {
      setErrorMessage(ERROR_MESSAGE.expiryFormat);
    } else {
      validateExpired();
    }
  };

  const resetErrors = () => {
    setInputState({ month: { ...inputState.month, hasError: false }, year: { ...inputState.month, hasError: false } });
    setErrorMessage('');
  };


  return [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useExpirationDateFormSection;