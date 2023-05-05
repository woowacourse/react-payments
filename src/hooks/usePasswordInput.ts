import { ChangeEventHandler, useState } from 'react';
import { validateFirstPassword, validateSecondPassword } from 'util/ValidatePassword';
import { validateInput } from 'util/Validation';

export type ExpirationDateInputTypes = (
  onChangeFirst: ChangeEventHandler<HTMLInputElement>,
  onChangeSecond: ChangeEventHandler<HTMLInputElement>,
) => {
  isFirstError: boolean;
  isSecondError: boolean;
  first: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
  second: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
};

export const usePasswordInput: ExpirationDateInputTypes = (
  onChangeFirst: ChangeEventHandler<HTMLInputElement>,
  onChangeSecond: ChangeEventHandler<HTMLInputElement>,
) => {
  const [isFirstError, setIsFirstError] = useState(false);
  const [isSecondError, setIsSecondError] = useState(false);
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');

  const handleFirstChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) {
      setIsFirstError(true);
      return;
    }

    validateFirstPassword(value) ? setIsFirstError(false) : setIsFirstError(true);
    onChangeFirst(e);
    setFirstDigit(value);
  };

  const handleSecondChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) {
      setIsSecondError(true);
      return;
    }

    validateSecondPassword(value) ? setIsSecondError(false) : setIsSecondError(true);
    onChangeSecond(e);
    setSecondDigit(value);
  };

  return {
    isFirstError: isFirstError,
    isSecondError: isSecondError,
    first: {
      value: firstDigit,
      onChange: handleFirstChange,
    },
    second: {
      value: secondDigit,
      onChange: handleSecondChange,
    },
  };
};
