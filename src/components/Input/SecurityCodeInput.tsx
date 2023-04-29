import { PaymentsInput } from 'components/common';
import { ChangeEventHandler } from 'react';
import { CSSProperties } from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface SecurityInputProps extends ValueAndOnChange {
  width?: CSSProperties['width'];
}

export function SecurityCodeInput({ value, onChange, width }: SecurityInputProps) {
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
      width={width}
      required
    />
  );
}
