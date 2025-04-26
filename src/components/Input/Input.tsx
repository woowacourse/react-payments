import { forwardRef } from 'react';
import StyledInput from './Input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, ...props }, ref) => {
  return <StyledInput ref={ref} isError={isError} {...props} />;
});

export default Input;
