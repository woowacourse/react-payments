import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...restProps }: InputProps) {
  return <_Input {...restProps} />;
}

const _Input = styled.input`
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${(props) => props.theme.color.grey100};
  border-radius: 0.7rem;

  text-align: center;
`;
