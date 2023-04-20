import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

type InputProps = {
  type?: HTMLInputTypeAttribute;
  width?: number;
  center?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  value: string;
  disabled?: boolean;
};

type StyledInputProps = {
  $width?: number;
  $center?: boolean;
  disabled?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => (props.$width ? `${props.$width * 10}px` : '100%')};
  padding: 12px;

  border: none;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? 'none' : '#ecebf1')};

  font-size: 18px;
  text-align: ${(props) => (props.$center ? 'center' : 'initial')};
`;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, width, center, placeholder, value, onChange, disabled } = props;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <StyledInput
      ref={ref}
      type={type}
      $width={width}
      $center={center}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      disabled={disabled}
    />
  );
});
