import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  center?: boolean;
  handleOnChange?: (value: string) => void;
  disabled?: boolean;
  maxCount?: number;
}

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
  const { type, width, center, placeholder, value, handleOnChange, disabled, maxCount } = props;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (maxCount !== undefined && event.target.value.length > maxCount) return;

    handleOnChange?.(event.target.value);
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
