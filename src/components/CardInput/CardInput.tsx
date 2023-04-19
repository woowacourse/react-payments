import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';

interface CardInputProps {
  type: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: () => void;
}

const Input = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
`;

const CardInput = forwardRef(
  (
    { type, maxLength, placeholder, onChange }: CardInputProps,
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
      />
    );
  }
);

export default CardInput;
