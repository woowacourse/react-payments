import { ChangeEventHandler, useState } from 'react';
import { validateInput } from 'util/Validation';

export type ExpirationDateInputTypes = (
  onChangeFirst: ChangeEventHandler<HTMLInputElement>,
  onChangeSecond: ChangeEventHandler<HTMLInputElement>,
) => {
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
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');

  const handleFirstChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) return;

    onChangeFirst(e);
    setFirstDigit(value);
  };

  const handleSecondChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) return;

    onChangeSecond(e);
    setSecondDigit(value);
  };

  return {
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
