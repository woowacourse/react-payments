import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';

export interface SecurityInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function SecurityCodeInput({ value, onChange }: SecurityInputProps) {
  return (
    <>
      <Input
        value={value}
        type="password"
        maxLength={3}
        onChange={onChange}
        inputMode="numeric"
        required
      />
    </>
  );
}
