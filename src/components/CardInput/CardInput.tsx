import { forwardRef, ForwardedRef } from 'react';
import * as Styled from './CardInput.styles';

interface CardInputProps {
  type: string;
  value: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  order?: number;
  required?: boolean;
  autofocus?: boolean;
}

const CardInput = forwardRef(
  (
    {
      type,
      maxLength,
      placeholder,
      onChange,
      value,
      order,
      required,
      autofocus,
    }: CardInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Styled.Input
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        ref={ref}
        onChange={onChange}
        value={value}
        data-order={order}
        autoFocus={autofocus}
      />
    );
  }
);

export default CardInput;
