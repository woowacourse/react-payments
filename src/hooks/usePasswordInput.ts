import { ChangeEventHandler, useState } from 'react';
import { validateInput } from 'util/Validation';

export type ExpirationDateInputTypes = (
  inputRefs: React.RefObject<HTMLInputElement>[],
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
  inputRefs: React.RefObject<HTMLInputElement>[],
  onChangeFirst: ChangeEventHandler<HTMLInputElement>,
  onChangeSecond: ChangeEventHandler<HTMLInputElement>,
) => {
  const [firstDigit, setFirstDigit] = useState<string>('');
  const [secondDigit, setSecondDigit] = useState<string>('');

  const handleFirstChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (validateInput(value)) return;
    if (value.trim().length === e.target.maxLength) {
      inputRefs[1].current?.focus();
    }
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
