import React, { forwardRef } from 'react';
import { InputStyle, StyledProps } from './Input.style';

type InputMode =
  | 'text'
  | 'search'
  | 'none'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | undefined;

interface Props extends React.HTMLAttributes<HTMLInputElement>, StyledProps {
  value?: string;
  type?: string;
  maxLength?: number;
  inputMode?: InputMode;
}

const Input = forwardRef<HTMLInputElement, Props>(function ({ ...props }: Props, ref) {
  return <InputStyle ref={ref} {...props} />;
});

export default Input;
