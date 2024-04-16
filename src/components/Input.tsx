import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid #acacac;
`;

function Input({ type, value, onChange }: InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput type={type} value={value} onChange={onChange}></StyledInput>;
}

export default Input;
