import { HTMLAttributes, forwardRef } from 'react';
import Input, { InputProps } from './input/Input.style';

interface Props extends InputProps, HTMLAttributes<HTMLInputElement> {
  value?: string;
  type?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <Input ref={ref} {...props} />;
});

export default FormInput;
