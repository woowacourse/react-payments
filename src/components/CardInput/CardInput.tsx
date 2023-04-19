import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';

interface CardInputProps {
  type: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  order?: number;
  required: boolean;
  autofocus?: boolean;
}

const Input = styled.input`
  width: fill-available;
  height: 45px;
  text-align: center;
`;

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
      <Input
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
