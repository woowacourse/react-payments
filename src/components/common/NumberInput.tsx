import { forwardRef } from 'react';
import type { InputProps } from './Input';
import { Input } from './Input';

type NumberInputProps = InputProps;

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const { handleOnChange, ...inputProps } = props;

  const handleInputChange = (value: string) => {
    if (!/^\d*$/.test(value)) return;

    handleOnChange?.(value);
  };

  return <Input ref={ref} handleOnChange={handleInputChange} {...inputProps} />;
});
