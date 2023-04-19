import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';

interface CardInputProps {
  type: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  order: number;
}

const Input = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
`;

const CardInput = forwardRef(
  (
    { type, maxLength, placeholder, onChange, value, order }: CardInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Input
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        required
        ref={ref}
        onChange={onChange}
        value={value}
        data-order={order}
      />
    );
  }
);

export default CardInput;
