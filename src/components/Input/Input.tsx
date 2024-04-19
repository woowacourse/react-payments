import { InputHTMLAttributes } from 'react';
import { StyledInput } from './style';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
