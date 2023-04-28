import React, { forwardRef } from 'react';
import styled from 'styled-components';

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

interface StyledProps {
  width?: string;
  textAlign?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function ({ ...props }: Props, ref) {
  return <InputStyle ref={ref} {...props} />;
});

export default Input;

const InputStyle = styled.input<StyledProps>`
  width: ${(props) => props.width ?? '100%'};
  height: 45px;
  letter-spacing: 1.5px;
  background-color: #ecebf1;
  border-radius: 7px;
  border: none;
  font-size: 18px;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: ${(props) => props.textAlign ?? 'center'};

  &:focus {
    outline: none;
  }
`;
