import { InputHTMLAttributes } from "react";
import styled from "styled-components";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleError?: () => void;
}

export function Input(props: InputProps) {
  const { handleChange, handleError, ...restProps } = props;

  return (
    <InputUnit onChange={handleChange} onBlur={handleError} {...restProps} />
  );
}

const InputUnit = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: #ecebf1;
  border-radius: 0.7rem;

  text-align: center;
`;
