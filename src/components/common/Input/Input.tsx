import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ onChange, ...restProps }: InputProps) {
  return <_Input onChange={onChange} {...restProps} />;
}

const _Input = styled.input`
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${(props) => props.theme.color.grey100};
  border-radius: 0.7rem;

  text-align: center;
`;
