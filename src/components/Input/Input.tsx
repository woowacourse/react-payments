import { InputHTMLAttributes } from 'react';
import * as Styled from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = ({ invalid, ...props }: InputProps) => {
  return <Styled.Input {...props} $invalid={invalid} />;
};

export default Input;
