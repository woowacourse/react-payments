import { forwardRef } from 'react';
import type { InputProps } from './Input';
import { Input } from './Input';

type NumberInputProps = InputProps;

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const { onChange, ...inputProps } = props;

  const handleInputChange = (value: string) => {
    if (/\D/.test(value)) return;

    onChange?.(value);
  };

  return <Input ref={ref} onChange={handleInputChange} {...inputProps} />;
});
