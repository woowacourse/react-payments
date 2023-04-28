import { PaymentsInput } from 'components/common';
import { ChangeEventHandler } from 'react';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface SecurityInputProps extends ValueAndOnChange {}

export function SecurityCodeInput({ value, onChange }: SecurityInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (!isNumber(value)) return;

    onChange?.(value);
  };

  return (
    <PaymentsInput
      value={value}
      type="password"
      maxLength={3}
      onChange={handleChange}
      inputMode="numeric"
      align="center"
      required
    />
  );
}
