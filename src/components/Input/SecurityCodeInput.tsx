import { Input } from 'components/common';
import { ValueAndOnChange } from './types';

export interface SecurityInputProps extends ValueAndOnChange {}

export function SecurityCodeInput({ value, onChange }: SecurityInputProps) {
  return (
    <>
      <Input
        value={value}
        type="password"
        maxLength={3}
        onChange={() => onChange}
        inputMode="numeric"
        required
      />
    </>
  );
}
