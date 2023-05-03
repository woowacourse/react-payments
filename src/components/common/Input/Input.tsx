import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    isError?: boolean;
  }
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

export function Input({ isError, ...restProps }: InputProps) {
  return <_Input isError={isError} {...restProps} />;
}

const _Input = styled.input`
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${(props) =>
    props.isError ? props.theme.color.warning : props.theme.color.grey100};
  border-radius: 0.7rem;

  text-align: center;

  :focus {
    border: 0.1rem solid;
    border-color: ${(props) => props.theme.color.skyblue200};
    outline: ${(props) => props.theme.color.skyblue200};
    background: ${(props) => props.theme.color.skyblue100};
  }
`;
