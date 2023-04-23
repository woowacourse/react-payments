import { Input } from 'components/common';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { ValueAndOnChange } from './types';

export interface PasswordInputProps {
  first: ValueAndOnChange;
  second: ValueAndOnChange;
}

export function PasswordInput(props: PasswordInputProps) {
  const { first, second } = props;
  const inputRefs = Object.keys(props).map(() => React.createRef<HTMLInputElement>());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;

    if (index < Object.keys(props).length - 1 && value.length === e.target.maxLength) {
      inputRefs[index + 1].current?.focus();
    }
    onChange && onChange(e);
  };

  return (
    <>
      <Input
        ref={inputRefs[0]}
        inputMode="numeric"
        value={first.value}
        type="password"
        maxLength={1}
        onChange={(e) => handleChange(e, 0, first.onChange)}
        required
      />
      <Input
        ref={inputRefs[1]}
        inputMode="numeric"
        value={second.value}
        type="password"
        maxLength={1}
        onChange={(e) => handleChange(e, 1, second.onChange)}
        required
      />
    </>
  );
}
