import { InputHTMLAttributes } from 'react';
import { StyledInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = ({ invalid, ...props }: InputProps) => {
  return <StyledInput {...props} invalid={invalid} />;
};

export default Input;
