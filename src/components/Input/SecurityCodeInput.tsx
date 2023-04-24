import { Input } from 'components/common';
import { ChangeEvent, ChangeEventHandler } from 'react';
import { validateInput } from 'util/Validation';

export interface SecurityInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function SecurityCodeInput({ value, onChange }: SecurityInputProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (validateInput(value)) return;

    onChange && onChange(e);
  };

  return (
    <Input
      value={value}
      inputMode="numeric"
      type="password"
      maxLength={3}
      onChange={(e) => handleChange(e, onChange)}
      required
    />
  );
}
