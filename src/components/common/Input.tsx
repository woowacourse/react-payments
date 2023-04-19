import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
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

export const Input = (props: InputProps) => {
  const { type, width, center, placeholder, value, onChange, disabled } = props;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <StyledInput
      type={type}
      $width={width}
      $center={center}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      disabled={disabled}
    />
  );
};
