import React, { forwardRef } from 'react';

import styled, { css } from 'styled-components';

/* type */
interface InputStyleProps {
  id?: number;
  type: 'text' | 'password' | 'number';
  variant: 'underline';
  isValid?: boolean;
  pattern?: string;
  size?: string;
  placeholder?: string;
  width: string;
  minLength?: number;
  maxLength: number;
  center: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/* component */
const Input = forwardRef<HTMLInputElement, InputStyleProps>(({ ...rest }, ref) => {
  return <StyledInput ref={ref} {...rest} />;
});

/* styles */
const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
  size: props.size || '1em',
  minLength: props.minLength || 0,
  maxLength: props.maxLength,
}))`
  border: none;
  outline: none;
  cursor: pointer;

  width: ${(props) => props.width};
  padding: ${(props) => props.size};

  &::placeholder {
    color: #737373;
  }

  ${(props) => {
    return (
      props.center &&
      css`
        text-align: center;
      `
    );
  }}

  ${(props) => {
    return (
      props.variant === 'underline' &&
      css`
        border-bottom: 2px solid #ecebf1;
      `
    );
  }}

  border-color: ${(props) => (props.isValid ? '#ecebf1' : 'red')};
`;

export default Input;
